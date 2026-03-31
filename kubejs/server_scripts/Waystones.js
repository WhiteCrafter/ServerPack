// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

    const variants = [
    {
        input: 'minecraft:stone_bricks',
        output: 'waystones:waystone'
    },
    {
        input:'minecraft:chiseled_sandstone',
        output: 'waystones:sandy_waystone'
    },
    {
        input: 'minecraft:end_stone_bricks',
        output: 'waystones:end_stone_waystone'
    },
    {
        input:'minecraft:blackstone',
        output: 'waystones:blackstone_waystone'
    },
    {
        input:'minecraft:mossy_stone_bricks',
        output: 'waystones:mossy_waystone'
    },
    {
        input:'minecraft:deepslate',
        output: 'waystones:deepslate_waystone'
    }
    ];

    variants.forEach(v => {
        event.remove({output:v.output});
        event.recipes.create.mechanical_crafting(
            v.output,
            [
                ' PPP ',
                'SSSSS',
                ' NNN ',
                '  C  ',
                ' NNN ',
                'SSSSS'
            ],
            {
                P: 'minecraft:ender_pearl',
                N: 'minecraft:netherite_block',
                S: v.input,
                C: 'waystones:warp_stone'
            }
        );
    });
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
