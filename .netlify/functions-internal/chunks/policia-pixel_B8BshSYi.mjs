const imagePolicia1 = new Proxy({"src":"/_astro/policia-pixel.Dt8XDT4Z.jpg","width":3840,"height":2160,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/policia-pixel.jpg";
							}
							
							return target[name];
						}
					});

export { imagePolicia1 as i };
