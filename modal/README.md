# modal

---------------
Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.


## 使用说明
### 使用HTML标签属性
Activate a modal without writing JavaScript. Set `data-toggle="modal"` on a controller element, like a button, along with a `data-target="#foo"` or `href="#foo"` to target a specific modal to toggle.
```html
<button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>
```
### 使用Javascript
Call a modal with id `myModal` with a single line of JavaScript:
```javascript
$('#myModal').modal(options)
```

## 配置说明
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-backdrop=""`
### backdrop `boolean`
default: true
desc: Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal on click.
### keyboard `boolean`
**default**: true  
**desc**: Closes the modal when escape key is pressed
### show `boolean`
**default**: true  
desc: Shows the modal when initialized.
### remote `path`
**default**: false  
**desc**: If a remote url is provided, content will be loaded via jQuery's `load` method and injected into the `.modal-body`. If you're using the data api, you may alternatively use the `href` tag to specify the remote source. An example of this is shown below:
```html
<a data-toggle="modal" href="remote.html" data-target="#modal">click me</a>
```
## 方法说明
### .modal( options )
Activates your content as a modal. Accepts an optional options object.
```javascript
$('#myModal').modal({
  keyboard: false
})
```
### .modal('toggle')
Manually toggles a modal.
```javascript
$('#myModal').modal('toggle')
```
### .modal('show')
```javascript
$('#myModal').modal('show')
```
### .modal('hide')
```javascript
$('#myModal').modal('hide')
```
## 事件说明
Bootstrap's modal class exposes a few events for hooking into modal functionality.
### show
This event fires immediately when the `show` instance method is called.
### shown
This event is fired when the modal has been made visible to the user (will wait for css transitions to complete).
### hide
This event is fired immediately when the `hide` instance method has been called.
### hidden
This event is fired when the modal has finished being hidden from the user (will wait for css transitions to complete).
```javascript
$('#myModal').on('hidden', function () {
  // do something…
})
```
