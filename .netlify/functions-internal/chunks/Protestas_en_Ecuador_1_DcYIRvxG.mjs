const imageProtestasEcuador1 = new Proxy({"src":"/_astro/Protestas_en_Ecuador_1.lM5PCoeO.jpg","width":1200,"height":630,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/Protestas_en_Ecuador_1.jpg";
							}
							
							return target[name];
						}
					});

export { imageProtestasEcuador1 as i };
