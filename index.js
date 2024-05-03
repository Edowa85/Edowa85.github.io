const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');

        canvas.width = 64 * 16
        canvas.height = 64 * 9

        

        const parsedCollisions = collisionsLevel1.parse2D()
        const CollisionBlocks = parsedCollisions.createObjectsFrom2D()


        const backgroundLevel1 = new Sprite({
            position: {
                x: 0,
                y: 0,
             },
             imageSrc: './office.png'
        }) 

        const player = new Player({
            CollisionBlocks,
            imageSrc: './idle.png',
            frameRate: 11,
        })

        const keys = {
            w: {
                pressed: false,
            },
            a: {
                pressed: false,
            },
            d: {
                pressed: false,
            },
        }

        function animate() {
            window.requestAnimationFrame(animate)

              backgroundLevel1.draw()
              CollisionBlocks.forEach(CollisionBlock => {
                CollisionBlock.draw()
              })

            player.velocity.x = 0
            if (keys.d.pressed) {
                player.velocity.x = 3
            } else if (keys.a.pressed) {
                player.velocity.x = -3
            }

            player.draw()
            player.update()
            
       
        }

        animate()

