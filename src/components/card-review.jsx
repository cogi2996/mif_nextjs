import Rating from '@/components/rating'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function CardReview() {
    return (
        <div>
            <div className="flex p-1 rounded border-b-2 items-center">
                <div className="flex gap-2">
                    <Avatar className="border w-10 h-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1 py-1">
                        <div className='flex gap-4 items-center'>
                            <p className="leading-none text-base">Sofia Davis</p>
                            <Rating
                                ratingInPercent={70}
                                iconSize="s"
                                showOutOf={true}
                                enableUserInteraction={false}
                            />
                            <p className="leading-none text-xs">7/10</p>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-4 text-justify">The movie Blink Twice is the directorial debut from Zoë Kravitz. I would say that she has made a good debut movie, but it needs a couple of adjustments for it to be fantastic.

                            From what is supposed to be a mystery thriller movie with some comedy, it does heavily fit into the mystery genre with its small clues throughout the movie that would tell you the real story. Before the third act where everything falls down. I wouldve liked for this movie to have gone down the story line quicker and given us a better final third act instead of using two whole acts with the same scenes over and over again... but with maybe a couple of clues.

                            The comedy aspect was alright... There was some funny moments that made most people inside the theater laugh.

                            But I wouldve liked some more gore or something from Channing Tatums character.

                            And didnt like the ending at all... It was just the switch of power between the genders. So... I get it tries to tell about woman being used and everything... but with that ending it makes no justice for what it tries to tell.

                            The cast was good and some good performances was noticeable. Especially Channing Tatum as Slater King and Naomi Ackie as Frida gave a good performance. But some of the other characters are just forgettable.

                            This movie does provide a mysterious atmosphere that I liked throughout the movie... but it still had some flaws that just takes the rating down for me. But its still a good watch with a final rating of 7/10.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
