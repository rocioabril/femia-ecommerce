const products = [
  {
    id: "007",
    name: "Aceite Esencial de Jazmín",
    image: "aceite-jazmin",
    price: "$15.000,00",
    category: "aceites",
    stock: 10,
    description: "El Aceite Esencial de Jazmín es conocido por su aroma embriagador y propiedades relajantes. Ideal para masajes y terapias aromáticas, este aceite ayuda a mejorar el estado de ánimo y a reducir el estrés. Extracción cuidadosa de las flores de jazmín garantiza la pureza y la potencia del aceite, haciendo que sea una elección perfecta para quienes buscan una experiencia aromática auténtica y natural. Además, su uso en difusores puede purificar el ambiente, creando un espacio más acogedor y sereno.",
  },
  {
    id: "008",
    name: "Aceite Esencial de Menta",
    image: "aceite-menta",
    price: "$15.000,00",
    category: "aceites",
    stock: 10,
    description: "Este aceite esencial de menta es perfecto para revitalizar la mente y el cuerpo. Sus propiedades refrescantes y analgésicas lo hacen ideal para aliviar dolores de cabeza y mejorar la concentración. La menta también ofrece beneficios terapéuticos como mejorar la digestión y combatir la fatiga respiratoria. Su aroma penetrante y fresco es excelente para la aromaterapia, ayudando a limpiar el aire de malos olores y proporcionando una sensación de frescura inmediata en cualquier espacio.",
  },
  {
    id: "009",
    name: "Aceite Esencial de Lavanda",
    image: "aceite-lavanda",
    price: "$15.000,00",
    category: "aceites",
    stock: 10,
    description: "Conocido por sus propiedades calmantes y reparadoras, el Aceite Esencial de Lavanda es un must para cualquier rutina de cuidado personal. Ayuda a relajar la mente y promueve un sueño reparador. Este aceite también es eficaz para aliviar el estrés, la ansiedad y la depresión. Su uso en la piel puede contribuir a la cicatrización de pequeñas heridas, quemaduras y picaduras de insectos, gracias a sus propiedades antiinflamatorias y antibacterianas. Su aroma suave y floral lo hace un favorito para añadir en baños de inmersión y productos de limpieza del hogar.",
  },
  {
    id: "004",
    name: "Emulsión Tensora",
    image: "emulsion-tensora",
    price: "$5.000,00",
    category: "cuerpo",
    stock: 10,
    description: "Esta emulsión tensora ofrece un efecto reafirmante instantáneo, ideal para áreas del cuerpo que requieren mayor tonificación. Su fórmula rica nutre y mejora la elasticidad de la piel, proporcionando una piel más firme y lisa con cada aplicación. Además, sus ingredientes activos ayudan a combatir la flacidez y a mejorar la textura general de la piel, haciendo que este producto sea indispensable para un cuidado corporal efectivo y profundo.",
  },
  {
    id: "005",
    name: "Emulsión Anticelulítica",
    image: "emulsion-anticelulitica",
    price: "$5.000,00",
    category: "cuerpo",
    stock: 10,
    description: "Formulada con ingredientes activos que ayudan a descomponer la grasa corporal, esta emulsión anticelulítica mejora la apariencia de la piel, reduciendo la celulitis y mejorando la textura cutánea. Sus componentes ayudan a estimular la circulación y promueven la eliminación de toxinas, facilitando un aspecto más suave y uniforme de la piel. Ideal para uso diario, esta emulsión ayuda a recuperar la elasticidad de la piel, especialmente en zonas problemáticas como muslos, caderas y abdomen.",
  },
  {
    id: "006",
    name: "Aceite Corporal",
    image: "aceite-corporal",
    price: "$5.000,00",
    category: "cuerpo",
    stock: 10,
    description: "Nuestro aceite corporal es una mezcla de aceites esenciales nutritivos que hidratan profundamente, dejando la piel suave, lisa y visiblemente más saludable. Ideal para después del baño o la ducha, este aceite no solo nutre la piel sino que también la protege de las agresiones externas, manteniendo su humedad natural. Su fórmula rica en vitaminas y antioxidantes fortalece la barrera cutánea y proporciona una sensación de bienestar duradero.",
  },
  {
    id: "001",
    name: "Leche de Limpieza",
    image: "leche-de-limpieza",
    category: "rostro",
    price: "$5.000,00",
    onSale: true,
    stock: 10,
    description: "Esta suave leche de limpieza elimina impurezas y maquillaje, mientras mantiene la hidratación natural de la piel. Ideal para todo tipo de piel, especialmente aquellas más sensibles o secas. Su fórmula enriquecida con ingredientes emolientes y calmantes deja la piel limpia, fresca y suavemente hidratada, sin irritar o desequilibrar el pH cutáneo. Es el primer paso perfecto en cualquier régimen de cuidado facial, preparando la piel para tratamientos posteriores.",
  },
  {
    id: "002",
    name: "Gel de Limpieza",
    image: "gel-de-limpieza",
    price: "$5.000,00",
    category: "rostro",
    stock: 5,
    description: "El Gel de Limpieza es perfecto para una limpieza profunda sin despojar a la piel de sus aceites naturales. Su fórmula ligera y refrescante deja la piel limpia, revitalizada y sin sensación de tirantez. Este producto es ideal para pieles mixtas a grasas, ayudando a controlar el exceso de sebo mientras elimina las impurezas y proporciona una sensación de frescura y limpieza duradera. Un uso regular puede mejorar la claridad y la textura de la piel.",
  },
  {
    id: "003",
    name: "Emulsión de Manos",
    image: "emulsion-manos",
    price: "$5.000,00",
    category: "rostro",
    stock: 10,
    description: "Enriquecida con ingredientes hidratantes, esta emulsión para manos combate la sequedad y deja las manos suaves y nutridas. Su fórmula no grasa se absorbe rápidamente, proporcionando confort inmediato y prolongado. Además, contiene extractos de plantas que protegen la piel de las agresiones externas y previenen el envejecimiento prematuro. Ideal para uso frecuente, especialmente en ambientes secos o durante los meses de invierno.",
  },
];

const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export default getData;
