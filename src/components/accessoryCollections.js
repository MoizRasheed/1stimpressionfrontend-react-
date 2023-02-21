import React,{useEffect,useState} from 'react'
import Slider from 'react-slick'
import axios from 'axios'

function Accessory({name}) {
    // console.log("name => ",name)
    const [data,setData] = useState()
    // console.log("data => ",data)
    useEffect(() => {
        async function getdata() {
            let config = {
                method: 'get',
                url:`https://1stimpressionbackend.vercel.app/api/user/accessory?name=${name}`,
                headers: { }
              }
              await axios(config)
              .then((response) => {
                setData(response.data)
                // console.log("response.data => ",response.data)
              })
              .catch((error) => {
                console.log(error);
              })
        }
        getdata()
    }, [name])
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    }
    if( data === undefined ) {
        return <p style={{textAlign:"center"}}>loading...</p>
    }
    if( data.data.length === 0 ) {
        return <p style={{textAlign:"center"}}>No Record added</p>
    }

  return (
    <>
        <div className='container pt-3 pb-3'>
            {data.data.map((e,i)=>{
                return <div key={i} className='col-3 d-inline-block box'>
                    <div className='accessories'>
                        <Slider pauseOnHover={true} {...settings}>
                        {e.avatar.map((e,i)=>
                            e.video?
                                <video key={i} style={{width: "100%"}} controls>
                                    <source src={e.url} />
                                </video>:
                                <img key={i} style={{width: "100%"}} src={e.url} alt='IMG' />
                        )}
                        </Slider>
                        <p className='text-center'>{e.price}</p>
                    </div>
                </div>
            })}
        </div>
    </>
  );
}

export default Accessory;