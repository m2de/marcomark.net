---
title: Working with the Laravel Nova Key Value Field
description: Understanding the KeyValue field in Nova and how to sort data
created: 2019-10-08
---

# Working with the Laravel Nova Key Value Field

I recently wanted to use the [Nova KeyValue field](https://nova.laravel.com/docs/2.0/resources/fields.html#keyvalue-field) to display data from my Vue application within Nova and needed to spend some time actually getting things to work nicely. I wanted to share this discovery process and the outcome here.

## Data Format

The first issue I ran into was that the Nova documentation doesn't make it very clear what the underlying data structure for the KeyValue field should be. It assumed that you are using it with data coming directly from the Nova CMS. The answer is, probably as expected, but worthwhile noting anyway.

```json
{
  "My key": "My Value",
  "Another key": "Another Value"
}
```

## Database and Model

Next up, there were some issues with nothing actually outputting within Nova. I found the most reliable option was to cast the attribute to a `collection`, which also makes it really easy to tweak the data before passing it to the Nova UI.

```php
// Database Migration

...
$table->json('meta'); // or use text if your database doesn't support json
...
```

```php
// Model
protected $casts = [
    'meta' => 'collection',
];
```

## Customising the Nova output

Use the `json` rules formatter.

```php
KeyValue::make('Meta')->rules('json'),
```

You can change the headings (currently not documented in the Nova docs).

```php
KeyValue::make('Meta')
  ->rules('json')
  ->keyLabel('Question')
  ->valueLabel('Answer'),
```

Finally, you can modify the collection before it is passed to the Nova UI. I personally needed to sort the values before displaying them, but you can call any [Laravel Collection](https://laravel.com/docs/6.x/collections) methods on the object.

```php
KeyValue::make('Meta')
  ->rules('json')
  ->keyLabel('Question')
  ->valueLabel('Answer')
  ->resolveUsing(function ($object) {
      return $object->sortKeys();
  }),
```
