// module('Optgroup-results');
// 
// var Options = require('select2/options');
// var OptgroupData = require('optgroup-data');
// var OptgroupResults = require('optgroup-results');
// 
// var selectOptions = new Options({
//     multiple: true
// });
// var dataAdapter = new OptgroupData(this.$select, this.selectOptions);
// 
// 
// //setClasss
// test('it sets all aria-selected[false] options in data to true', function(assert){
//     var results = OptgroupResults($select, selectOptions, dataAdapter);
//     results.render();
//     results.$results.html(
//         $('#qunit-fixture')
//     )
// });
// 
// test('it unsets all aria-selected[true] options not in the data', function(){
//     expect(0);
// });
// 
// test('it does not change all aria-selected[true] in the data', function(){
//     expect(0);
// });
// 
// test('it does not change all aria-selected[false] in the data', function(){
//     expect(0);
// });
// //
// // test('it sets all aria-selected[false] groups in data to true', function(){});
// // test('it unsets all aria-selected[true] groups not in the data', function(){});
// // test('it does not change all aria-selected[true] groups in the data', function(){});
// // test('it does not change all aria-selected[false] groups the data', function(){});
// 
// //bind
// // test('mouseup on selected optgroup triggers optgroup:unselect and calls setClasses', function(){});
// // test('mouseup on unselected optgroup triggers optgroup:select and calls setClasses', function(){});
// // test('mouseup on unselected optgroup closes container if closeOnSelect=true', function(){});
// // test('mouseup on unselected optgroup keeps container open if closeOnSelect=false', function(){});
// 
// //option
// //var $label = $(option).find('.select2-results__group');
// // test('gives the group role=treeitem, aria-selected=false', function(){})
// // test('gives the group.data', function(){})
