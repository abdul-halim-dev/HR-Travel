import Image from "next/image"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"


const popolarContent = [
{
    id:1,
    title:"popular content",
    badge:"Mickel Jonson",
    image:"https://i.ibb.co.com/0RQCkKHg/image.png",
    count:2300
},
{
    id:2,
    title:"popular content",
    badge:"Mickel Jonson",
    image:"https://i.ibb.co.com/0RQCkKHg/image.png",
    count:2300
},
{
    id:3,
    title:"popular content",
    badge:"Mickel Jonson",
    image:"https://i.ibb.co.com/0RQCkKHg/image.png",
    count:2300
} 
]

 const latestTranactions = [
{
    id:1,
    title:"Subscription Renewal",
    badge:"Mickel Jonson",
    image:"https://i.ibb.co.com/9HB9hzcX/image2.png",
    count:2300
},
{
    id:2,
    title:"Subscription Renewal",
    badge:"Mickel Jonson",
    image:"https://i.ibb.co.com/9HB9hzcX/image2.png",
    count:2300
},
{
    id:3,
    title:"Subscription Renewal",
    badge:"Mickel Jonson",
    image:"https://i.ibb.co.com/9HB9hzcX/image2.png",
    count:2300
} 
 
]



const CardList = ({title}) => {
    const list = title === 'popular content' ? popolarContent : latestTranactions
  return (
    <div className="w-full ">
        <h1 className='text-lg font-semibold mb-6'> {title} </h1>
        <div className=" w-full flex flex-wrap items-center gap-2 justify-center">
            {
                list.map((item)=>(
                    <Card key={item.id} className='w-full px-2 flex flex-row gap-3 items-center justify-between'>
                        <div className=" w-12 h-12 rounded-sm relative overflow-hidden ">
                            <Image src={item.image} fill alt={item.title}  className="object-cover" />
                        </div>
                        <CardContent className='p-0'>
                            <CardTitle className='text-sm font-semibold '>{item.title} </CardTitle>
                            <Badge variant="secondary"> {item.badge} </Badge>

                         </CardContent>
                        <CardFooter className='p-0'>
                            {item.count/1000}k
                        </CardFooter>
                     </Card>
                ))
            }
        </div>
    </div>
  )
}

export default CardList