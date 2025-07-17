const imageIntervencionMetro = new Proxy({"src":"/_astro/intervincion-anonima-2-desktop.rf9cXzYD.jpg","width":800,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/canciones-trabajo/intervincion-anonima-2-desktop.jpg";
							}
							
							return target[name];
						}
					});

export { imageIntervencionMetro as i };
