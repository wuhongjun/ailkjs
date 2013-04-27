# 演示文档

---
`````html
<link rel="stylesheet" type="text/css" href="http://twitter.github.io/bootstrap/assets/css/bootstrap.css" />
`````
````html
<a href="#modal" data-toggle="modal">modal</a>
<div id="modal" class="modal" style="display:none">
    <div class="modal-header">
        <button class="close" data-dismiss="modal">x</button>
        <h3>Title</h3>
    </div>
    <div class="modal-body">
        content
    </div>
</div>
````

````javascript
seajs.use('seajq/modal/1.0.0/modal', function(modal){
    modal.autoinit();
});
````
