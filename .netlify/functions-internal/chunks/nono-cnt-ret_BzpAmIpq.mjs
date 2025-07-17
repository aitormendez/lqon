const imageNonoCNT = new Proxy({"src":"/_astro/nono-cnt-ret.DPn32qMC.jpg","width":800,"height":542,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/nono-cnt-ret.jpg";
							}
							
							return target[name];
						}
					});

export { imageNonoCNT as i };
