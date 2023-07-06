export default function mock() {

    const data = [
        {
            id:1,
            attributes:{
            title:"Esmaltado semipermanente",
            description: "- Uñas impecables por hasta 15 días\n- El esmalte queda automáticamente seco al finalizar el servicio\n- Brillo intenso en el esmaltado",
            price:1900,
            details:"Es un esmaltado de secado inmediato y de larga duración",
            profesional:null,
            type:"Manicuría",
            thumbnail:{
                data:{
                    attributes:{
                        url: "/assets/400x400.png"
                    }
                }
            },
            gallery:{
                data:[
                    {
                    attributes:{
                        url: "/assets/600x400.png"
                    }  
                    }

                ]
            },
            category:{
                name:"Manicuría",
                slug:"manicuria"
            },
            variation:[
                {
                    id:1,
                    variations:"1hs - 1hs 20min con retirado"
                }
            ]
            }
        },
        {
        id:2,
        attributes:{
            title:"Reflexología",
            description: "La reflexología es una técnica milenaria que consiste en masajear los pies con el fin de estimular\npuntos reflejos que se encuentran en ellos y que están relacionados con los órganos y sus\nfunciones fisiológicas. Se identifica estas zonas reflejas para ayudar al paciente a alcanzar su\nequilibrio natural. La reflexología bien aplicada produce un aumento en las secreciones\nfisiológicas. Ayudando por tanto a la desintoxicación del organismo, se observa una mejoría del\nsueño y un alivio a los dolores. Tiene sus precauciones . La sesión abarca: mapa reflexógeno del\npie, zonas del cuerpo, anatomía del pie, anatomía del sistema nervioso, órganos de los sentidos,\narticulaciones, sistema endocrino, sistema circulatorio, aparato digestivo, respiratorio, sistema\nurinario, sistema linfático, aparato genital. Puede ayudar a varias Afecciones en cada persona.\nTambién se puede realizar en Zonas reflejas de las manos, zona refleja del rostro.\n",
            price:3800,
            details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a gravida tellus, imperdiet volutpat enim. Nulla euismod sed urna in mattis.",
            profesional:"Profesional: Mónica",
            type:"Masajes",
            thumbnail:{
                data:{
                    attributes:{
                        url:"/assets/400x400.png"
                    }
                }
            },
            gallery:{
                data:{
                    attributes:{
                        url: "/assets/600x400.png"
                    }
                }
            },
            category:{
                name:"Masajes",
                slug:"Masajes"

            },
            variation:[
                {
                    id:2,
                    variations:"1hs 20min"
                }
            ]
        }
    }
    ]

return data;
}