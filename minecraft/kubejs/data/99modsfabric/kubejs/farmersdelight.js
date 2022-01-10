/* onEvent('rei.hide.items', event => {
    event.hide('farmersdelight:oak_pantry')
}) */

onEvent('rei.information', event => {
    event.add('farmersdelight:oak_pantry', 'Title', ['Line 1', 'Line 2'])
})

/* 
const pantries = ['farmersdelight:oak_pantry', 'farmersdelight:birch_pantry', 'farmersdelight:spruce_pantry']

pantries.forEach(function (item, i) {
    onEvent('recipes', event => {

        // console.log(item, index);
        const pantry = item[i];
        event.remove({ output: "'" + pantry + "'" });
        //event.remove({ output: 'farmersdelight:oak_pantry'})
    })
});
 */
onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:oak_pantry'})
})

onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:birch_pantry'})
})

onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:spruce_pantry'})
})

onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:dark_oak_pantry'})
})

onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:jungle_pantry'})
})

onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:crimson_pantry'})
})

onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:warped_pantry'})
})

onEvent('recipes', event => {
    event.remove({ output: 'farmersdelight:acacia_pantry'})
})