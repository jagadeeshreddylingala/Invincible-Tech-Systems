import React,{useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Clients = () => {

const [state,setState] = useState([]) ;

const [newarray, setNewarray ] = useState(["0","1","2" , "3", "4"])

	useEffect(() => {
    let postUrl = `https://backend-dev.invincibletechsystems.com/wp-json/wp/v2/pages?slug="clients"`;
    fetch(postUrl)
      .then((data) => data.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  console.log("state", state);

  const Clientsdata1 = state !==[] && state.map(list => {
    return list.content.rendered.split("<p>")
  });

   const Clientsdatapicture = state !==[] && state.map(list => {
    return list.content.rendered.toString().split("<p></p>")
  });

   console.log("Clientsdatapicture", Clientsdatapicture[0])

  console.log("Clientsdata1", Clientsdata1.length)

  console.log("newarray", newarray)


  	const clients0 =  state !==[] && Clientsdata1 !== "" && Clientsdata1

     console.log("clients0", clients0)


  	 const clients1 = state !==[] && state.map(list => {
		return list.content.rendered.toString().split("</p>")[1]
	});

  	const clients2 = state !==[] && state.map(list => {
		return list.content.rendered.toString().split("</p>")[2];
	});

  	  const clients3 = state !==[] && state.map(list => {
		return list.content.rendered.toString().split("</p>")[3];
	});

  	 const clients4 = state !==[] && state.map(list => {
		return list.content.rendered.toString().split("</p>")[4];
	});

  	const clients5 = state !==[] && state.map(list => {
		return list.content.rendered.toString().split("</p>")[5];
	});

	const clients6 = state !==[] && state.map(list => {
		return list.content.rendered.toString().split("</p>")[6];
	});

  const clients7 = state !==[] && state.map(list => {
    return list.content.rendered.toString().split("</p>")[7];
  });

  const clients8 = state !==[] && state.map(list => {
    return list.content.rendered.toString().split("</p>")[8];
  });

  const clients9 = state !==[] && state.map(list => {
    return list.content.rendered.toString().split("</p>")[9];
  });

	/*const clients6 =  state !==[] && Clientsdata1 !== "" && Clientsdata1.toString().split("</p>")[1]

*/


if(state !==[] && state !=="" ){
  const array = state !==[] && state.map(list => {
    return list.content.rendered.toString().split("<p>")
  });

  console.log("lenght", array.length)
  for (var i = 0; i<array.length; i++) {
    console.log("in for loppppppppppppppppppppp")
       state !==[] && state.map(list => {
    console.log("for loop", list.content.rendered.toString().split("</p>")[i]);
  });
    
  }
}

console.log("clients======>",Clientsdata1.length)

console.log("clients ********************",  clients1)


    const params = {
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 5
            },

            991:{
                slidesPerView : 3
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
    }

    return (
        <div className="brand-two">
            <div className="container">
                <div className="brand-one__carousel owl-carousel owl-theme">

                    <Swiper {...params}>
                        <div className="item clients_text">
                           <div dangerouslySetInnerHTML = {{__html:clients0}} />
                        </div>
                        <div className="item clients_text">
                             <div dangerouslySetInnerHTML = {{__html:clients1}} />
                        </div>
                        <div className="item clients_text">
                             <div dangerouslySetInnerHTML = {{__html:clients2}} />
                        </div>
                        <div className="item clients_text">
                             <div dangerouslySetInnerHTML = {{__html:clients3}} />
                        </div>
                        <div className="item clients_text">
                             <div dangerouslySetInnerHTML = {{__html:clients4}} />
                        </div>
                        <div className="item clients_text">
                              <div dangerouslySetInnerHTML = {{__html:clients5}} />
                        </div>
                        <div className="item clients_text">
                           <div dangerouslySetInnerHTML = {{__html:clients6}} />
                        </div>
                        <div className="item clients_text">
                             <div dangerouslySetInnerHTML = {{__html:clients7}} />
                        </div>
                        <div className="item clients_text">
                             <div dangerouslySetInnerHTML = {{__html:clients8}} />
                        </div>
                        <div className="item clients_text">
                             <div dangerouslySetInnerHTML = {{__html:clients9}} />
                        </div>
                       
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Clients;


/* */