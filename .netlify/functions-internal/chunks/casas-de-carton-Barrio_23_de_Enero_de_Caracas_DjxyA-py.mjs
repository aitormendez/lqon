const imageBarrio23Enero = new Proxy({"src":"/_astro/casas-de-carton-Barrio_23_de_Enero_de_Caracas.DrLi3BLt.jpg","width":1518,"height":1012,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/casas-de-carton/casas-de-carton-Barrio_23_de_Enero_de_Caracas.jpg";
							}
							
							return target[name];
						}
					});

export { imageBarrio23Enero as i };
