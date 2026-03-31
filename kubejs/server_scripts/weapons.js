// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

LootJS.modifiers(event => {
    event.addLootTableModifier(/^minecraft:chests\/.*/)
    .removeLoot('@wom')
})
ServerEvents.recipes(event => {
    event.remove({mod:'wom'})
//     const variants = [
//
//     ];
//
//     variants.forEach(v => {
//         event.remove({output:v.output});
//         event.recipes.create.mechanical_crafting(
//             v.output,
//             [
//                 ' PPP ',
//                 'SSSSS',
//                 ' NNN ',
//                 '  C  ',
//                 ' NNN ',
//                 'SSSSS'
//             ],
//             {
//                 P: 'minecraft:ender_pearl',
//                 N: 'minecraft:netherite_block',
//                 S: v.input,
//                 C: 'waystones:warp_stone'
//             }
//         );
//     });
    // event.remove({output:'waystones:waystone'})
    // event.recipes.create.mechanical_crafting(
    //     'waystones:waystone',
    //     [
    //         ' PPP ',
    //         'SSSSS',
    //         ' NNN ',
    //         '  C  ',
    //         ' NNN ',
    //         'SSSSS'
    //     ],
    //     {
    //         P: 'minecraft:ender_pearl',
    //         N: 'minecraft:netherite_block',
    //         S: 'minecraft:stone_bricks',
    //         C: 'waystones:warp_stone'
    //     }
    // );
});
