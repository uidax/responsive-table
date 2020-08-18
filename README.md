# responsive-table
Minimal mobile friendly responsive table

## Usage

Create your dom like this:

```html
<table class="repsonsive-table">
  <thead>
    <tr>
      <th>first name</th>
      <th>last name</th>
      <th>actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Leo</td>
      <td>Chow</td>
      <td>
        <button>edit</button>
        <button>delete</button>
      </td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>
        <button>edit</button>
        <button>delete</button>
      </td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>Doe</td>
      <td>
        <button>edit</button>
        <button>delete</button>
      </td>
    </tr>
  </tbody>
</table>
```

### CDN

The easiest way to use repsonsive-table is to include responsive-table js to your html with:

```
https://cdn.jsdelivr.net/npm/@uidax/responsive-table
```

Usage:

```javascript
new ResponsiveTable(options)
```

[Example on codesandbox](https://codesandbox.io/s/responsive-table-cdn-mgqtk)

### Node

To include responsive-table in Node, first install with npm:

```
npm i @uidax/responsive-table
```

Or yarn:

```
yarn add @uidax/responsive-table
```

Import:

```javascript
import ResponsiveTable from '@uidax/responsive-table'
```

Usage:

```javascript
new ResponsiveTable(options)
```

[Example on codesandbox](https://codesandbox.io/s/responsive-table-node-bf5i7)

## Options

All the options of ResponsiveTable constructor are optional with default value:

```javascript
new ResponsiveTable({
  // string, the table selector.
  tableSelector: '.responsive-table',
  // string, the max width for media query.
  breakPoint: '768',
  // string, the label font weight for mobile.
  labelFontWeight: '900',
  // string, the suffix for label.
  labelSuffix: ':',
  // string, the margin-right of label.
  labelAfterSpace: '12',
  // array of number, hidden labels base on INDEX of column.
  hiddenLabels: [], 
})
```

## License

[The MIT License](https://github.com/uidax/responsive-table/blob/master/LICENSE).