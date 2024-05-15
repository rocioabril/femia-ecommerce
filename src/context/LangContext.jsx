import { createContext, useState, useContext } from "react";

export const defaultLang = {
  es: {
    "leche-de-limpieza": "Leche de Limpieza",
    "gel-de-limpieza": "Gel de Limpieza",
    "aceite-jazmin": "Aceite Esencial de Jazmín",
    "aceite-menta": "Aceite Esencial de Menta",
    "aceite-lavanda": "Aceite Esencial de Lavanda",
    "emulsion-tensora": "Emulsión Tensora",
    "emulsion-anticelulitica": "Emulsión Anticelulítica",
    "aceite-corporal": "Aceite Corporal",
    "emulsion-manos": "Emulsión de Manos",
    "": "",
    "leche-de-limpieza-description": "Esta suave leche de limpieza elimina impurezas y maquillaje, mientras mantiene la hidratación natural de la piel. Ideal para todo tipo de piel, especialmente aquellas más sensibles o secas. Su fórmula enriquecida con ingredientes emolientes y calmantes deja la piel limpia, fresca y suavemente hidratada, sin irritar o desequilibrar el pH cutáneo. Es el primer paso perfecto en cualquier régimen de cuidado facial, preparando la piel para tratamientos posteriores.",
    "gel-de-limpieza-description": "El Gel de Limpieza es perfecto para una limpieza profunda sin despojar a la piel de sus aceites naturales. Su fórmula ligera y refrescante deja la piel limpia, revitalizada y sin sensación de tirantez. Este producto es ideal para pieles mixtas a grasas, ayudando a controlar el exceso de sebo mientras elimina las impurezas y proporciona una sensación de frescura y limpieza duradera. Un uso regular puede mejorar la claridad y la textura de la piel.",
    "aceite-jazmin-description": "El Aceite Esencial de Jazmín es conocido por su aroma embriagador y propiedades relajantes. Ideal para masajes y terapias aromáticas, este aceite ayuda a mejorar el estado de ánimo y a reducir el estrés. Extracción cuidadosa de las flores de jazmín garantiza la pureza y la potencia del aceite, haciendo que sea una elección perfecta para quienes buscan una experiencia aromática auténtica y natural. Además, su uso en difusores puede purificar el ambiente, creando un espacio más acogedor y sereno.",
    "aceite-menta-description": "Este aceite esencial de menta es perfecto para revitalizar la mente y el cuerpo. Sus propiedades refrescantes y analgésicas lo hacen ideal para aliviar dolores de cabeza y mejorar la concentración. La menta también ofrece beneficios terapéuticos como mejorar la digestión y combatir la fatiga respiratoria. Su aroma penetrante y fresco es excelente para la aromaterapia, ayudando a limpiar el aire de malos olores y proporcionando una sensación de frescura inmediata en cualquier espacio.",
    "aceite-lavanda-description": "Conocido por sus propiedades calmantes y reparadoras, el Aceite Esencial de Lavanda es un must para cualquier rutina de cuidado personal. Ayuda a relajar la mente y promueve un sueño reparador. Este aceite también es eficaz para aliviar el estrés, la ansiedad y la depresión. Su uso en la piel puede contribuir a la cicatrización de pequeñas heridas, quemaduras y picaduras de insectos, gracias a sus propiedades antiinflamatorias y antibacterianas. Su aroma suave y floral lo hace un favorito para añadir en baños de inmersión y productos de limpieza del hogar.",
    "emulsion-tensora-description": "Esta emulsión tensora ofrece un efecto reafirmante instantáneo, ideal para áreas del cuerpo que requieren mayor tonificación. Su fórmula rica nutre y mejora la elasticidad de la piel, proporcionando una piel más firme y lisa con cada aplicación. Además, sus ingredientes activos ayudan a combatir la flacidez y a mejorar la textura general de la piel, haciendo que este producto sea indispensable para un cuidado corporal efectivo y profundo.",
    "emulsion-anticelulitica-description": "Formulada con ingredientes activos que ayudan a descomponer la grasa corporal, esta emulsión anticelulítica mejora la apariencia de la piel, reduciendo la celulitis y mejorando la textura cutánea. Sus componentes ayudan a estimular la circulación y promueven la eliminación de toxinas, facilitando un aspecto más suave y uniforme de la piel. Ideal para uso diario, esta emulsión ayuda a recuperar la elasticidad de la piel, especialmente en zonas problemáticas como muslos, caderas y abdomen.",
    "aceite-corporal-description": "Nuestro aceite corporal es una mezcla de aceites esenciales nutritivos que hidratan profundamente, dejando la piel suave, lisa y visiblemente más saludable. Ideal para después del baño o la ducha, este aceite no solo nutre la piel sino que también la protege de las agresiones externas, manteniendo su humedad natural. Su fórmula rica en vitaminas y antioxidantes fortalece la barrera cutánea y proporciona una sensación de bienestar duradero.",
    "emulsion-manos-description": "Enriquecida con ingredientes hidratantes, esta emulsión para manos combate la sequedad y deja las manos suaves y nutridas. Su fórmula no grasa se absorbe rápidamente, proporcionando confort inmediato y prolongado. Además, contiene extractos de plantas que protegen la piel de las agresiones externas y previenen el envejecimiento prematuro. Ideal para uso frecuente, especialmente en ambientes secos o durante los meses de invierno.",
    //categorys
    "aceites-esenciales": "ACEITES ESENCIALES",
    "cuerpo":"CUERPO",
    "rostro":"ROSTRO",

    "añadir_al_carrito": "Añadir al Carrito",
    "terminar_compra": "Terminar compra",
    "añadiste": "Añadiste",
    "items": "items",
    "producto_no_encontrado": "Producto no encontrado",


  },
  en: {
    //names
    "leche-de-limpieza": "Cleansing Milk",
    "gel-de-limpieza": "Cleansing Gel",
    "aceite-jazmin": "Jasmine Oil",
    "aceite-menta": "Peppermint Oil",
    "aceite-lavanda": "Lavender Oil",
    "emulsion-tensora": "Tensing Emulsion",
    "emulsion-anticelulitica": "Anticellulite Emulsion",
    "aceite-corporal": "Body Oil",
    "emulsion-manos": "Hand Emulsion",
    //descriptions
    "leche-de-limpieza-description":
      "This gentle cleansing milk removes impurities and makeup while maintaining the skin's natural moisture. Ideal for all skin types, especially those more sensitive or dry. Its formula enriched with emollient and soothing ingredients leaves the skin clean, fresh, and gently hydrated, without irritating or unbalancing the skin's pH. It is the perfect first step in any facial care regimen, preparing the skin for subsequent treatments.",
    "gel-de-limpieza-description":
      "This cleansing gel is perfect for a deep clean without stripping the skin of its natural oils. Its light and refreshing formula leaves the skin clean, revitalized, and without a feeling of tightness. This product is ideal for combination to oily skin, helping to control excess sebum while removing impurities and providing a long-lasting feeling of freshness and cleanliness. Regular use can improve the clarity and texture of the skin.",
    "aceite-jazmin-description":
      "Jasmine essential oil is known for its intoxicating scent and relaxing properties. Ideal for massages and aromatic therapies, this oil helps to improve mood and reduce stress. Careful extraction of jasmine flowers ensures the purity and potency of the oil, making it a perfect choice for those seeking an authentic and natural aromatic experience. Additionally, its use in diffusers can purify the environment, creating a more welcoming and serene space.",
    "aceite-menta-description":
      "This peppermint essential oil is perfect for revitalizing the mind and body. Its refreshing and analgesic properties make it ideal for relieving headaches and improving concentration. Peppermint also offers therapeutic benefits such as improving digestion and combating respiratory fatigue. Its penetrating and fresh aroma is excellent for aromatherapy, helping to cleanse the air of bad smells and providing an immediate feeling of freshness in any space.",
    "aceite-lavanda-description":
      "Known for its calming and restorative properties, Lavender Essential Oil is a must for any personal care routine. It helps relax the mind and promotes restful sleep. This oil is also effective in relieving stress, anxiety, and depression. Its use on the skin can help heal small wounds, burns, and insect bites, thanks to its anti-inflammatory and antibacterial properties. Its mild and floral scent makes it a favorite to add to soaking baths and home cleaning products.",
    "emulsion-tensora-description":
      "This tensing emulsion offers an instant firming effect, ideal for body areas that require more toning. Its rich formula nourishes and improves the elasticity of the skin, providing firmer and smoother skin with each application. In addition, its active ingredients help combat sagging and improve the overall texture of the skin, making this product indispensable for effective and deep body care.",
    "emulsion-anticelulitica-description":
      "Formulated with active ingredients that help break down body fat, this anticellulite emulsion improves the appearance of the skin, reducing cellulite and improving skin texture. Its components help stimulate circulation and promote the elimination of toxins, facilitating a smoother and more even appearance of the skin. Ideal for daily use, this emulsion helps regain skin elasticity, especially in problem areas like thighs, hips, and abdomen.",
    "aceite-corporal-description":
      "Our body oil is a blend of nourishing essential oils that deeply moisturize, leaving the skin soft, smooth, and visibly healthier. Ideal for after bathing or showering, this oil not only nourishes the skin but also protects it from external aggressions, maintaining its natural moisture. Its formula rich in vitamins and antioxidants strengthens the skin barrier and provides a lasting sense of well-being.",
    "emulsion-manos-description":
      "Enriched with moisturizing ingredients, this hand emulsion combats dryness and leaves hands soft and nourished. Its non-greasy formula absorbs quickly, providing immediate and prolonged comfort. Additionally, it contains plant extracts that protect the skin from external aggressions and prevent premature aging. Ideal for frequent use, especially in dry environments or during the winter months.",
    //categorys
    "aceites-esenciales": "ESSENTIAL OILS",
    "cuerpo": "BODY",
    "rostro": "FACE",

    "añadir_al_carrito": "Add to cart",
    "terminar_compra": "Complete purchase",
    "añadiste": "You added",
    "items": "items",
    "producto_no_encontrado": "Product not found",

  },
};

const LangContext = createContext({
  language: defaultLang.es,
  setLanguage: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
  const [language, setLanguage] = useState(defaultLang.es);

  const toggleLanguage = (lang) => {
    setLanguage(defaultLang[lang]);
  };

  return (
    <LangContext.Provider value={{ language, setLanguage: toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContext;
