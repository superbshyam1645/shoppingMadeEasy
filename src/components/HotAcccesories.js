import React from 'react'
import HotItemCard from  "./HotItemCard.js"
import "../styles/HotAcccesories.css"

const HotAcccesories = ({music,musicCover,smartDevices,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccesories,mobileAccesoriesCover}) => {
  return (
    <div className="HotAcccesories">

            <div>
                <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccesoriesCover} alt="Cover" />
            </div>

            <div>
                {music && music.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {smartDevices && smartDevices.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
            
                {home && home.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {lifestyle && lifestyle.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {mobileAccesories && mobileAccesories.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

<HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

            </div>

    </div>
  )
}

export default HotAcccesories