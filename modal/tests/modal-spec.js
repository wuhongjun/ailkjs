define(function(require) {
    var $ = require('$');
    var expect = require('expect');
    var modal = require('../src/modal');

    beforeEach(function(){
        $('<div><a id="modal" href="http://www.baidu.com" data-target="panel" data-toggle="modal"></a><div id="panel"></div></div>').appendTo(document.body);
    });
    describe('modal', function(){
        describe('#modal::autoinit()',function(){
            it('modal\'s constructor should be Modal', function() {
                expect(new modal('modal',{remote:'http://www.baidu.com'}) instanceof modal).to.be(true);
            });
            
            
        });
    });

});

