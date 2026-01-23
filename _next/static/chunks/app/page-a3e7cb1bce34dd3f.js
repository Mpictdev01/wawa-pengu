(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[931],
	{
		9256: function (A, e, t) {
			Promise.resolve().then(t.bind(t, 2353));
		},
		2353: function (A, e, t) {
			"use strict";
			t.r(e),
				t.d(e, {
					default: function () {
						return Al;
					},
				});
			var a = t(7437),
				s = t(2265),
				l = t(6648),
				r = t(6379),
				i = t(4446),
				n = {
					src: "/_next/static/media/CoinMarketCup.d66ddadb.png",
					height: 500,
					width: 500,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaUlEQVR42g3CIQ6CUAAA0Ne8g6hH0KRFD+DcLMxqsXsEu9HmpkGLM8mYifEZG4mDEDgG8PZgKhFkUjMYK23BWi7iY4+HkaWTNwE3rbPOwtcw9vJXu3hKuWsQW+FqQ6SyAwdHYCJRCH7m9KeQGQ0bxep1AAAAAElFTkSuQmCC",
					blurWidth: 8,
					blurHeight: 8,
				},
				o = {
					src: "/_next/static/media/CoinGecko.7027ed29.png",
					height: 500,
					width: 500,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAj0lEQVR42mNgYGBQko1mcJqY2FjOIAvmSvpsZ2Bg+87yn7UijkGBQTaEQSJky8Qvbo8Y4i5ZTyxn0DNhKPT7P++//3+G//aHluQwcJjydzD8Z/jJ8E/yP0eoij0DdxDTBRagAPd/vjwGBoZoBmZJhtsM/xn/M5xgYOAMFlRkYGJgEGVYzPCZeQ2XL5MKGwMAu5onwoPEeSYAAAAASUVORK5CYII=",
					blurWidth: 8,
					blurHeight: 8,
				},
				c = {
					src: "/_next/static/media/Twitter.e2af9ae7.png",
					height: 500,
					width: 500,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42iXILQ7BAQAH0F+wfzAO8IzkBKbQ2FSBYE4gCG5AJWEE39UxnEJxGzYvvnh5uqtILcb20bTUsRM9R/kxsTB2sFFIlMRK28NAFP+oe2s4qciPqouhta6tROGqJabmRmZx0xdlsXT2+QJgJxgdWJth7wAAAABJRU5ErkJggg==",
					blurWidth: 8,
					blurHeight: 8,
				},
				d = {
					src: "/_next/static/media/Telegram.e950c1a4.png",
					height: 500,
					width: 500,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42i3IMQqCYBiA4ecG8rt2gW7RBbpGtEdTc4fIIBwao7MItbREBiq4uzl8gsi7vDyQuap9FRJkKrH0lrjMO3g6CSWtxt7W2kao6VWOdjgLPwohHKw8hBvJa6ZR+MghKf117nImZWsnL99fKXoAAAAASUVORK5CYII=",
					blurWidth: 8,
					blurHeight: 8,
				},
				x = {
					src: "/_next/static/media/Prerich.5ce8bc79.png",
					height: 500,
					width: 500,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42h3JuwkCYRRE4Q+LEaxATLQISzCyCSOL2kSMNxCzjY1ERIxEdB/+Dsu598DMcNMpgp+3B11onNUuilZUm5hbmqoUuUPC1cna1lgcLeysbLwMFJVZPOIjauzj3iDmLouvNt97/gFE+jNo4fzr3wAAAABJRU5ErkJggg==",
					blurWidth: 8,
					blurHeight: 8,
				};
			function g(A) {
				let { currentTab: e, setCurrentTab: t } = A,
					[g, h] = (0, s.useState)(!1),
					[m, u] = (0, s.useState)(!1);
				(0, s.useEffect)(() => {
					let A = () => u(window.innerWidth < 768);
					return (
						A(),
						window.addEventListener("resize", A),
						() => window.removeEventListener("resize", A)
					);
				}, []);
				let w = { closed: { opacity: 0, y: -10 }, open: { opacity: 1, y: 0 } };
				return (0, a.jsxs)("nav", {
					className:
						"text-xl font-bold z-50 bg-[rgba(0,0,0,0.1)] backdrop-blur-lg px-4 py-2 rounded-full relative",
					children: [
						(0, a.jsx)("div", {
							className: "md:hidden flex justify-end",
							children: (0, a.jsx)(r.E.button, {
								onClick: () => {
									h(!g);
								},
								className:
									"py-2 px-4 w-[600px]  rounded-full bg-pink-300 border-2 border-black",
								whileHover: { scale: 1.05 },
								whileTap: { scale: 0.95 },
								children: g ? "Close Menu" : "Open Menu",
							}),
						}),
						(0, a.jsx)(i.M, {
							children:
								(g || !m) &&
								(0, a.jsxs)(r.E.div, {
									initial: "closed",
									animate: "open",
									exit: "closed",
									variants: {
										closed: {
											opacity: 0,
											y: -20,
											transition: {
												staggerChildren: 0.05,
												staggerDirection: -1,
											},
										},
										open: {
											opacity: 1,
											y: 0,
											transition: { staggerChildren: 0.07, delayChildren: 0.2 },
										},
									},
									className:
										"flex flex-col absolute top-full left-[15px] transform  min-w-[600px] bg-white md:static md:flex md:flex-row md:justify-between md:items-center gap-4 p-4 md:p-0 md:bg-transparent mt-2 md:mt-0 rounded-lg md:rounded-none shadow-lg md:shadow-none",
									children: [
										(0, a.jsxs)("div", {
											className:
												"flex flex-row justify-center gap-2 my-2 md:my-0",
											children: [
												(0, a.jsx)(r.E.a, {
													variants: w,
													href: "https://coinmarketcap.com/dexscan/solana/74cdMSwA1GXoCdNGnZKnt884Uxr4DgUyRp5eC7hL5aaP/",
													target: "_blank",
													rel: "noopener noreferrer",
													children: (0, a.jsx)(l.default, {
														src: n,
														alt: "CoinMarketCap",
														className: "w-10",
													}),
												}),
												(0, a.jsx)(r.E.a, {
													variants: w,
													href: "https://www.coingecko.com/en/coins/wawa-cat",
													target: "_blank",
													rel: "noopener noreferrer",
													children: (0, a.jsx)(l.default, {
														src: o,
														alt: "CoinGecko",
														className: "w-10",
													}),
												}),
												(0, a.jsx)(r.E.a, {
													variants: w,
													href: "https://x.com/wawa_cto",
													target: "_blank",
													rel: "noopener noreferrer",
													children: (0, a.jsx)(l.default, {
														src: c,
														alt: "Twitter",
														className: "w-10",
													}),
												}),
												(0, a.jsx)(r.E.a, {
													variants: w,
													href: "https://t.me/realwawacto",
													target: "_blank",
													rel: "noopener noreferrer",
													children: (0, a.jsx)(l.default, {
														src: d,
														alt: "Telegram",
														className: "w-10",
													}),
												}),
												(0, a.jsx)(r.E.a, {
													variants: w,
													href: "https://app.prerich.com/solana/coin/8Sk2EJ9oo25b7Mmf4qd5gJw6z3738AXvAbkuSSpQpump",
													target: "_blank",
													rel: "noopener noreferrer",
													children: (0, a.jsx)(l.default, {
														src: x,
														alt: "Prerich",
														className: "w-10",
													}),
												}),
											],
										}),
										(0, a.jsx)("div", {
											children: (0, a.jsx)(r.E.a, {
												variants: w,
												href: "https://jup.ag/swap/SOL-8Sk2EJ9oo25b7Mmf4qd5gJw6z3738AXvAbkuSSpQpump",
												target: "_blank",
												rel: "noopener noreferrer",
												className:
													"w-auto py-2 px-4 bg-pink-300 rounded-full border-2 border-black hover:bg-pink-100 transition-all duration-300 text-center block",
												children: "Buy Now",
											}),
										}),
										(0, a.jsx)("div", {
											children: (0, a.jsx)(r.E.a, {
												variants: w,
												href: "https://wawamint.xyz",
												target: "_blank",
												rel: "noopener noreferrer",
												className:
													"w-auto py-2 px-4 bg-pink-300 rounded-full border-2 border-black hover:bg-pink-100 transition-all duration-300 text-center block",
												children: "NFT Collection",
											}),
										}),
									],
								}),
						}),
					],
				});
			}
			var h = t(886),
				m = t.n(h),
				u = t(5303),
				w = t(1942);
			let p = (A) => {
					let { rank: e } = A;
					switch (e) {
						case 1:
							return (0, a.jsx)("span", {
								role: "img",
								"aria-label": "Gold Medal",
								className: "text-yellow-500",
								children: "\uD83E\uDD47",
							});
						case 2:
							return (0, a.jsx)("span", {
								role: "img",
								"aria-label": "Silver Medal",
								className: "text-gray-400",
								children: "\uD83E\uDD48",
							});
						case 3:
							return (0, a.jsx)("span", {
								role: "img",
								"aria-label": "Bronze Medal",
								className: "text-orange-500",
								children: "\uD83E\uDD49",
							});
						default:
							return (0, a.jsx)("span", {
								className: "text-gray-600",
								children: e,
							});
					}
				},
				b = (A) =>
					A >= 1e6
						? (A / 1e6).toFixed(1) + "M"
						: A >= 1e3
						? (A / 1e3).toFixed(1) + "k"
						: null == A
						? void 0
						: A.toString();
			function f() {
				let [A, e] = (0, s.useState)(!0),
					[t, l] = (0, s.useState)([]),
					[r, i] = (0, s.useState)(0),
					[n, o] = (0, s.useState)({}),
					[c, d] = (0, s.useState)(!1),
					x = async () => {
						try {
							e(!0);
							let A = await u.Z.getLeaderboard();
							l(A), g(A), e(!1);
						} catch (A) {
							e(!1);
						}
					},
					g = (A) => {
						i(A.reduce((A, e) => A + e.totalClicks, 0));
					};
				return (
					(0, s.useEffect)(() => {
						x();
					}, []),
					(0, s.useEffect)(
						() => (
							u.Z.setupSocketIO((A) => {
								l(A), g(A);
							}),
							() => {
								u.Z.cleanupSocketIO();
							}
						),
						[]
					),
					(0, s.useEffect)(() => {
						if (t.length > 0) {
							let A = t.reduce((A, e) =>
									A.totalClicks > e.totalClicks ? A : e
								),
								e = t.find((A) => A.isUsersCountry);
							A &&
								e &&
								o({
									topCountry: (null == A ? void 0 : A.country) || "",
									topCountryName: (null == A ? void 0 : A.country) || "",
									topCountryClicks: (null == A ? void 0 : A.totalClicks) || "",
									userCountryClicks: (null == e ? void 0 : e.totalClicks) || "",
									userCountryName: (null == e ? void 0 : e.country) || "",
								});
						}
					}, [t]),
					(0, a.jsxs)("div", {
						className:
							"absolute w-full max-w-[90%] sm:max-w-[500px] bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-200 shadow-xl rounded-t-lg transition-all duration-300 ease-in-out ".concat(
								c ? "h-1/2" : "h-16",
								" flex flex-col items-center overflow-hidden z-50"
							),
						children: [
							(0, a.jsxs)("button", {
								onClick: () => d((A) => !A),
								className:
									"w-full h-16 text-gray-800 text-md sm:text-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-between px-2 sm:px-4",
								children: [
									(0, a.jsxs)("div", {
										className: "flex items-center space-x-1 sm:space-x-2",
										children: [
											(0, a.jsx)(m(), {
												code: null == n ? void 0 : n.topCountry,
												className: "w-4 h-4 sm:w-6 sm:h-6",
											}),
											(0, a.jsx)("span", {
												className: "font-bold",
												children: "#1",
											}),
											(0, a.jsx)("span", {
												className: "hidden sm:inline",
												children: null == n ? void 0 : n.topCountryName,
											}),
											(0, a.jsxs)("span", {
												children: [
													"(",
													b(null == n ? void 0 : n.topCountryClicks),
													")",
												],
											}),
										],
									}),
									(0, a.jsxs)("div", {
										className: "flex items-center space-x-1 sm:space-x-2",
										children: [
											(0, a.jsx)(m(), {
												code: null == n ? void 0 : n.userCountryName,
												className: "w-4 h-4 sm:w-6 sm:h-6",
											}),
											(0, a.jsx)("span", {
												className: "hidden sm:inline",
												children: null == n ? void 0 : n.userCountryName,
											}),
											(0, a.jsxs)("span", {
												children: [
													"(",
													b(null == n ? void 0 : n.userCountryClicks),
													")",
												],
											}),
										],
									}),
									(0, a.jsx)("div", {
										className:
											"transform transition-transform duration-300 ".concat(
												c ? "rotate-180" : ""
											),
										children: "▲",
									}),
								],
							}),
							(0, a.jsx)("div", {
								className:
									"w-full overflow-auto transition-all duration-300 ease-in-out ".concat(
										c ? "flex-grow" : "h-0"
									),
								children: (0, a.jsxs)("div", {
									className:
										"w-full max-w-4xl mx-auto my-4 sm:my-8 p-2 sm:p-4 rounded-lg",
									children: [
										(0, a.jsx)("h1", {
											className:
												"text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-indigo-600",
											children: "\uD83C\uDF0D Global Click Leaderboard",
										}),
										A
											? (0, a.jsxs)("div", {
													className: "flex justify-center items-center",
													children: [
														(0, a.jsx)(w.fCD, {
															className:
																"animate-spin h-6 w-6 sm:h-8 sm:w-8 text-indigo-600",
														}),
														(0, a.jsx)("p", {
															className:
																"ml-2 text-base sm:text-lg font-medium",
															children: "Loading scores...",
														}),
													],
											  })
											: (0, a.jsxs)(a.Fragment, {
													children: [
														(0, a.jsxs)("div", {
															className:
																"worldwide-total text-center mb-4 sm:mb-6 text-base sm:text-lg font-semibold",
															children: [
																(0, a.jsx)("span", {
																	role: "img",
																	"aria-label": "Worldwide",
																	children: "\uD83C\uDF0D",
																}),
																" ",
																"Worldwide Clicks:",
																" ",
																(0, a.jsx)("span", {
																	className: "text-indigo-600",
																	children: b(r),
																}),
															],
														}),
														(0, a.jsx)("div", {
															className: "overflow-x-auto",
															children: (0, a.jsxs)("table", {
																className:
																	"min-w-full table-auto border-collapse",
																children: [
																	(0, a.jsx)("thead", {
																		children: (0, a.jsxs)("tr", {
																			className: "bg-indigo-400 text-white",
																			children: [
																				(0, a.jsx)("th", {
																					className:
																						"py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-md",
																					children: "Rank",
																				}),
																				(0, a.jsx)("th", {
																					className:
																						"py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-md",
																					children: "Country",
																				}),
																				(0, a.jsx)("th", {
																					className:
																						"py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-md",
																					children: "Clicks",
																				}),
																			],
																		}),
																	}),
																	(0, a.jsx)("tbody", {
																		children: t.map((A, e) => {
																			let {
																				_id: t,
																				country: s,
																				totalClicks: l,
																			} = A;
																			return (0, a.jsxs)(
																				"tr",
																				{
																					className: "".concat(
																						e % 2 == 0
																							? "bg-gray-50"
																							: "bg-white",
																						" hover:bg-indigo-100 transition-all"
																					),
																					children: [
																						(0, a.jsx)("td", {
																							className:
																								"py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-md",
																							children: (0, a.jsx)(p, {
																								rank: e + 1,
																							}),
																						}),
																						(0, a.jsxs)("td", {
																							className:
																								"py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-md flex items-center",
																							children: [
																								(0, a.jsx)(m(), {
																									code: t,
																									className:
																										"w-4 h-3 sm:w-6 sm:h-4 mr-1 sm:mr-2",
																									alt: "".concat(s, " Flag"),
																								}),
																								(0, a.jsx)("span", {
																									className: "hidden sm:inline",
																									children: s,
																								}),
																								(0, a.jsx)("span", {
																									className: "sm:hidden",
																									children: s.substring(0, 3),
																								}),
																							],
																						}),
																						(0, a.jsx)("td", {
																							className:
																								"py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-md",
																							children: b(l),
																						}),
																					],
																				},
																				t
																			);
																		}),
																	}),
																],
															}),
														}),
													],
											  }),
									],
								}),
							}),
						],
					})
				);
			}
			var E = t(5161),
				j = t(2151),
				C = t.n(j),
				v = t(9805),
				B = {
					src: "/_next/static/media/wawa-cat.b9b72378.png",
					height: 844,
					width: 1155,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAuklEQVR42mMAgZa0aPvl1bF37585GHF85cys7RNKl/3+/5+NAQbmZcrlbZxQ9f/9u7f/b108839DT8H/Uwsr5eEKrmxZf+72jRv/71y88evqmas/H1y/9f/xhVMBcAUvbz5p/fbx8/9756/8fnjxyv/Pz9/c+fjuqypcwccvXwqe3L76/+W9dz/evfjy/+GtCxtB4u+fPGYBK7h3+dyBl48f/r998t3vh5ce/H/7/NGHn///CzAwMDAAAIWCcCw1SGnJAAAAAElFTkSuQmCC",
					blurWidth: 8,
					blurHeight: 6,
				},
				Q = {
					src: "/_next/static/media/wawa-cry.38214672.png",
					height: 844,
					width: 1155,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42mMAge4Yd7sVZSH3Hpw5FHFq5ays7X3Fy/7//8/KAAMTGtKq1s7t+f/2zev/l8+d/L9hYvn/C6v7lMCSPMevuq0/fv79kX1H/x+bv+n38Y2Hfu0+fOr/7CPHyxjufudlYFiwTurxnadTbh0+/X9nzfQ/ZxZu+P/21sNrk64+yBY9eF4dbMqnL1/znz24+f/hpRc/Xj/59P/p/SsbQeJV528JgBXcu3zuwIvHD//fOvHh98OLD/+/ff7ow9f//8GSAEPhc++CNBNxAAAAAElFTkSuQmCC",
					blurWidth: 8,
					blurHeight: 6,
				},
				y = {
					src: "/_next/static/media/ghostbl.3d4275f6.png",
					height: 154,
					width: 137,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA30lEQVR42mOAgb2rr6y7efLt/0O7zjQzIAHRyQ2r6l/d//H/5/v//x9f//S/uLTAHizTWDitY8+KK//fP/j/+/Xdv3+fX/33/+KRBz8mT5qmwVCW0u13ZMPd/88u/v/95Pz/n88v//9/Yd/zw2CdM9vW79g8/8z/e6e+/3907td/sOTe5/+7a+f5MXRWzs3KCmlw3b/62oWdyy9U719zbdWelZf6lk/dkwbWnXuXgY0hg0GVoZVBmiGXQQGIRRmmAsV2M/xnrJ8X7dmyOKG0aWFcbcuixPLmhYkZTQvi3QG3x3pVRtyycwAAAABJRU5ErkJggg==",
					blurWidth: 7,
					blurHeight: 8,
				},
				k = {
					src: "/_next/static/media/ghostbr.fd11d367.png",
					height: 143,
					width: 140,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mNoyJjD+P/vf2YGIFg0YcfEMzuf/D6z7+5x11wGUQZkMH/W8oJH1z79f3Xl/+8X1/7/v3j6xiKwxITGJc7tpfOWb19++sHrW///Pz7/5/eLy///3zn/5iFQmoOhPKvDYuXUQ/9Pbnn8//ml/3+eXPz7F0j/v336w5fwQgY5sClTmlbPOrX1yf/nV/7/f34Ziq/+/39o+8WpYAUz29fvWz5l36WrB9+9unbo3Z1rh97fv3vy2//jW++9BSsoSm0GG1XTmx+X3+0XX9AZEljXWRHV1N5sCffF////GWuXulg0LQ1zb1oaYle72DO9erGTKwC24o/5LZSXKwAAAABJRU5ErkJggg==",
					blurWidth: 8,
					blurHeight: 8,
				},
				N = {
					src: "/_next/static/media/ghosttr.12557a99.png",
					height: 87,
					width: 91,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBElEQVR42mOAgfTIyuYN848937H+8FEgVwsk1lDTxgyWTA2prDy149H/l5f////w5P//8+cuPAQK88A0C167cvPtx4f//z8+9/fPiyv/f3x6//3/7DlzMsGypRktfvcuvP//6tr/v4/P//n/+Oz/359f//t/6Oj+xWAFM7pW5W5bcvb/ksk7/1w/+v7/0/P//3588v//1atXz4MVdFTNqj6+9f5/oBt+vbz6/+/LK///vb/7/9+zJy9+AKU1Geb3bTl948iH/zeOfvx///SP/ye23f9/7eCH/6/u//h/6NChAwxt5bOO1OVPnJwUWlw7tXXVTaAuv66aOV2Lp26bt3bl5jUAA2afK/iDrGcAAAAASUVORK5CYII=",
					blurWidth: 8,
					blurHeight: 8,
				},
				D = {
					src: "/_next/static/media/ghosttc.e996dd47.png",
					height: 116,
					width: 131,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AaOSuASqrqb8JSYkRU5GV54TFw8L5vPVcB8cIaInLSEBAQAAAAAAAAADvarU5DE0KxgBAgAA9/z0AKGvii14dILUAZeKqSsXFBilKCQvLiIvDwD8/P7+/fkCA+fn5u3n8dueAQAAACTLuOPRHRwcCvz9/f8BAAIBAQAB/fn89wPM2L1kAf/t/wC/wNa+Ih4kQQQFBPwDAwIDAwMA/vb1+gOoq6RhAZ2NsZopJSxlGBgaAPj59wAMCwwA+vr7AOvs6fvk5ePjAZaGqnro6ebwJyUqYMzPyJA7OEBo9/b28l1vSGaCc5VQfO5nAS+NeMUAAAAASUVORK5CYII=",
					blurWidth: 8,
					blurHeight: 7,
				},
				I = {
					src: "/_next/static/media/ghosttl.0c38d794.png",
					height: 68,
					width: 83,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA3klEQVR42mMAAkYGKKjK6puyasbBdxsWH9rFwMAgzAAC62efYGEAgrq8SRP3r7nx/8Wl/3+fX//9f8fm/T0MSEB55dSD/28d+/z/4ek/v7+9+f//9KkzlzrbepMYQKAktaPh5NZH/x+d+/37yYW//19c/f/7zZPv/4+fOH6XIco/02HZ5H3/7578/v/19f+/nl/+/+f5lf//L565fpyBgYGboadm4Z3prWs2zevdcujWsU9ga57d+Pl/6fJFUQwgoK2pL8PAAAZqffULlxcmtvod3Xf26YoVK3wZGBgYABExeWDXViwcAAAAAElFTkSuQmCC",
					blurWidth: 8,
					blurHeight: 7,
				},
				U = t(7412);
			let S = (A) => {
				let { src: e, alt: t, className: i } = A,
					n = (0, v._)();
				return (
					(0, s.useEffect)(() => {
						n.start({
							y: [0, -30, 30, 0],
							x: [0, 20, -20, 0],
							transition: {
								duration: 5,
								repeat: 1 / 0,
								repeatType: "mirror",
								ease: "easeInOut",
							},
						});
					}, [n]),
					(0, a.jsx)(r.E.div, {
						className: i,
						animate: n,
						children: (0, a.jsx)(l.default, { src: e, alt: t }),
					})
				);
			};
			function R() {
				let { clicks: A, addClick: e } = (0, E.e)(),
					[t, r] = (0, s.useState)(A),
					[i, n] = (0, s.useState)(!1),
					[o] = (0, U.Z)("/SoundEffect.mp3"),
					c = (0, s.useMemo)(
						() =>
							C()(() => {
								e(),
									r((A) => A + 1),
									n(!0),
									o(),
									setTimeout(() => {
										n(!1);
									}, 300);
							}, 100),
						[e, o]
					);
				return (
					(0, s.useEffect)(() => {
						r(A);
					}, [A]),
					(0, a.jsx)("div", {
						className:
							"flex flex-col items-center justify-between min-h-screen w-full relative",
						children: (0, a.jsxs)("div", {
							className:
								"w-full h-screen bg-[url('../assets/background.png')] bg-cover bg-center relative z-0",
							children: [
								(0, a.jsxs)("div", {
									className:
										"flex-grow flex flex-col items-center justify-center relative z-40",
									children: [
										(0, a.jsx)("button", {
											onClick: c,
											className:
												"absolute inset-0 opacity-0 z-30 cursor-pointer w-full h-[100vh]",
											"aria-label": "Click Button",
										}),
										(0, a.jsxs)("h2", {
											className:
												"text-lg sm:text-xl font-bold mt-24 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-lg px-4 py-2 rounded-full",
											children: ["Total Clicks: ", t],
										}),
									],
								}),
								(0, a.jsx)(l.default, {
									src: B,
									className:
										"absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-[400px] md:w-[800px] lg:w-[1000px] xl:w-[1100px]",
									alt: "Wawa Cat",
								}),
								i &&
									(0, a.jsx)(l.default, {
										src: Q,
										className:
											"absolute left-1/2 transform -translate-x-1/2 bottom-0 z-20 w-[400px] md:w-[800px] lg:w-[1000px] xl:w-[1100px]",
										alt: "Wawa Cry",
									}),
								(0, a.jsx)(S, {
									src: y,
									alt: "Ghost Bottom Left",
									className:
										"absolute bottom-10 left-5 z-0 w-16 sm:w-20 md:w-24 lg:w-28",
								}),
								(0, a.jsx)(S, {
									src: k,
									alt: "Ghost Bottom Right",
									className:
										"absolute bottom-10 right-16 z-0 w-16 sm:w-20 md:w-24 lg:w-28",
								}),
								(0, a.jsx)(S, {
									src: I,
									alt: "Ghost Top Left",
									className:
										"absolute top-10 left-5 z-0 w-16 sm:w-20 md:w-24 lg:w-28",
								}),
								(0, a.jsx)(S, {
									src: N,
									alt: "Ghost Top Right",
									className:
										"absolute top-10 right-16 z-0 w-16 sm:w-20 md:w-24 lg:w-28",
								}),
								(0, a.jsx)(S, {
									src: D,
									alt: "Ghost Top Center",
									className:
										"absolute top-10 left-1/2 transform -translate-x-1/2 z-0 w-16 sm:w-20 md:w-24 lg:w-28",
								}),
								(0, a.jsx)(f, {}),
							],
						}),
					})
				);
			}
			var M = {
					src: "/_next/static/media/1.d44d99cd.jpg",
					height: 1024,
					width: 1024,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAApgFv/8QAHBAAAQMFAAAAAAAAAAAAAAAAEQABIQIDEjFx/9oACAEBAAE/AJe4A2LUHUnq/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAgEBPwBph//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q==",
					blurWidth: 8,
					blurHeight: 8,
				},
				W = {
					src: "/_next/static/media/2.2f84f20c.jpg",
					height: 1024,
					width: 1024,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAKA7H//EABsQAAIDAAMAAAAAAAAAAAAAAAIDARETACEi/9oACAEBAAE/AHJAGC82zqTs1BB1Xm+45//EABcRAQADAAAAAAAAAAAAAAAAAAIAMXH/2gAIAQIBAT8ANrZ//8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACESL/2gAIAQMBAT8AKBUdetn/2Q==",
					blurWidth: 8,
					blurHeight: 8,
				},
				P = {
					src: "/_next/static/media/3.39614208.jpg",
					height: 736,
					width: 736,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAArwov/8QAHhAAAQMEAwAAAAAAAAAAAAAAEQECEwADBRIiQcH/2gAIAQEAAT8AkvJmBI+N3EdFG7Ae1//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAxEScv/aAAgBAgEBPwBsRfZX/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECQnL/2gAIAQMBAT8AnXKP/9k=",
					blurWidth: 8,
					blurHeight: 8,
				},
				K = {
					src: "/_next/static/media/4.8b0411b5.jpg",
					height: 1280,
					width: 1280,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAKMMS/8A/8QAHRAAAQMFAQAAAAAAAAAAAAAAAQISMgADBBEicf/aAAgBAQABPwAY3ZvvW6MzrwJr/8QAGREAAQUAAAAAAAAAAAAAAAAAAQADEhNy/9oACAECAQE/AGhGzZX/xAAbEQABBAMAAAAAAAAAAAAAAAAhAQIDEQAEE//aAAgBAwEBPwDZesnC6ELUAz//2Q==",
					blurWidth: 8,
					blurHeight: 8,
				},
				z = {
					src: "/_next/static/media/5.234aeb36.jpg",
					height: 1024,
					width: 1024,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAtDp//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBQAEFDKC/9oACAEBAAE/AKwhLDcVrJ5diEtyYj18Ln//xAAZEQACAwEAAAAAAAAAAAAAAAABEgACETH/2gAIAQIBAT8AoVYDmz//xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAIAQMBAT8AdN//2Q==",
					blurWidth: 8,
					blurHeight: 8,
				},
				G = {
					src: "/_next/static/media/6.eb053a78.jpg",
					height: 2048,
					width: 1448,
					blurDataURL:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAL0VP//EABwQAAIBBQEAAAAAAAAAAAAAAAECAwARIiMx8f/aAAgBAQABPwBIFN4mi1KcQG57X//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhNS/9oACAECAQE/AK4ZR//EABgRAAIDAAAAAAAAAAAAAAAAAAABAxNS/9oACAEDAQE/ALZNs//Z",
					blurWidth: 6,
					blurHeight: 8,
				},
				L = () => {
					let A = [M, W, P, K, z, G],
						[e, t] = (0, s.useState)(0);
					return (
						(0, s.useEffect)(() => {
							let e = setInterval(() => {
								t((e) => (e + 1) % A.length);
							}, 3e3);
							return () => clearInterval(e);
						}, [A.length]),
						(0, a.jsxs)("div", {
							className:
								"w-64 h-64 relative bg-gray-100 rounded-lg shadow-lg overflow-hidden",
							children: [
								A.map((A, t) =>
									(0, a.jsx)(
										"div",
										{
											className:
												"absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ".concat(
													t === e ? "opacity-100" : "opacity-0"
												),
											children: (0, a.jsx)(l.default, {
												src: A,
												alt: "Artwork ".concat(t + 1),
												layout: "fill",
												objectFit: "cover",
											}),
										},
										t
									)
								),
								(0, a.jsx)("div", {
									className:
										"absolute bottom-2 left-0 right-0 flex justify-center space-x-2",
									children: A.map((A, t) =>
										(0, a.jsx)(
											"div",
											{
												className: "w-2 h-2 rounded-full ".concat(
													t === e ? "bg-white" : "bg-gray-400"
												),
											},
											t
										)
									),
								}),
							],
						})
					);
				},
				H = t(9381),
				O = t(4245),
				Y = t(5482);
			let F = async (A) => {
				try {
					return (
						await Y.Z.post("/mails/submit-twitter-handle", { twitterHandle: A })
					).data;
				} catch (A) {
					throw (console.error("Error submitting Twitter handle:", A), A);
				}
			};
			var T = (A) => {
				let { isOpen: e, closeModal: t } = A,
					[l, r] = (0, s.useState)(!1);
				return e
					? (0, a.jsx)("div", {
							className:
								"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
							children: (0, a.jsxs)("div", {
								className: "bg-white rounded-lg p-8 max-w-md w-full",
								children: [
									(0, a.jsxs)("div", {
										className: "flex justify-between items-center mb-6",
										children: [
											(0, a.jsx)("h2", {
												className: "text-2xl font-bold text-gray-800",
												children: "Apply Now",
											}),
											(0, a.jsx)("button", {
												onClick: t,
												className:
													"text-gray-600 hover:text-gray-800 transition-colors",
												children: (0, a.jsx)("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													className: "h-6 w-6",
													fill: "none",
													viewBox: "0 0 24 24",
													stroke: "currentColor",
													children: (0, a.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														strokeWidth: 2,
														d: "M6 18L18 6M6 6l12 12",
													}),
												}),
											}),
										],
									}),
									l
										? (0, a.jsx)("p", {
												className: "text-lg text-green-600 font-semibold",
												children: "Email Sent! Thank you for applying.",
										  })
										: (0, a.jsx)(H.J9, {
												initialValues: { twitterHandle: "" },
												validationSchema: O.Ry({
													twitterHandle: O.Z_()
														.required("Twitter handle is required")
														.matches(
															/^@?(\w){1,15}$/,
															"Invalid Twitter handle format"
														),
												}),
												onSubmit: async (A, e) => {
													let { setSubmitting: t, setFieldError: a } = e;
													try {
														await F(A.twitterHandle), t(!1), r(!0);
													} catch (A) {
														t(!1),
															a(
																"twitterHandle",
																"Failed to submit Twitter handle. Please try again."
															);
													}
												},
												children: (A) => {
													let { isSubmitting: e } = A;
													return (0, a.jsxs)(H.l0, {
														className: "space-y-4",
														children: [
															(0, a.jsxs)("div", {
																children: [
																	(0, a.jsx)("label", {
																		htmlFor: "twitterHandle",
																		className:
																			"block text-sm font-medium text-gray-700 mb-1",
																		children: "Twitter Handle",
																	}),
																	(0, a.jsx)(H.gN, {
																		name: "twitterHandle",
																		type: "text",
																		placeholder: "@username",
																		className:
																			"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
																	}),
																	(0, a.jsx)(H.Bc, {
																		name: "twitterHandle",
																		component: "div",
																		className: "mt-1 text-sm text-red-600",
																	}),
																],
															}),
															(0, a.jsx)("button", {
																type: "submit",
																disabled: e,
																className:
																	"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50",
																children: e ? "Sending..." : "Send",
															}),
														],
													});
												},
										  }),
								],
							}),
					  })
					: null;
			};
			function V() {
				let [A, e] = (0, s.useState)(!1),
					[t, l] = (0, s.useState)(!1);
				return (
					(0, s.useEffect)(() => {
						let A = () => {
							l(window.innerWidth <= 1024);
						};
						return (
							A(),
							window.addEventListener("resize", A),
							() => window.removeEventListener("resize", A)
						);
					}, []),
					(0, a.jsxs)("div", {
						className: "relative min-h-screen overflow-hidden",
						children: [
							(0, a.jsx)("video", {
								className:
									"absolute z-0 top-0 left-0 w-full h-full object-cover",
								autoPlay: !0,
								loop: !0,
								muted: !0,
								playsInline: !0,
								children: (0, a.jsx)("source", {
									src: "/Section2.mp4",
									type: "video/mp4",
								}),
							}),
							(0, a.jsx)("div", {
								className: "absolute inset-0 z-10 ".concat(
									t
										? "bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"
										: ""
								),
							}),
							(0, a.jsx)("div", {
								className: "absolute z-20 ".concat(
									t
										? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
										: "top-[230px] left-2",
									" border-black border-2 rounded-md"
								),
								children: (0, a.jsx)(L, {}),
							}),
							(0, a.jsx)("div", {
								className: "absolute z-20 ".concat(
									t
										? "bottom-10 left-1/2 transform -translate-x-1/2"
										: "top-[495px] left-2",
									" w-full max-w-[260px] px-2"
								),
								children: (0, a.jsx)("button", {
									onClick: () => e(!0),
									className:
										"bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-full py-3 px-8 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 shadow-md",
									children: "Apply Now",
								}),
							}),
							(0, a.jsx)(T, { isOpen: A, closeModal: () => e(!1) }),
						],
					})
				);
			}
			t(3054);
			var J = () =>
					(0, a.jsx)("div", {
						className:
							"overflow-hidden whitespace-nowrap w-full border-box bg-[rgba(0,0,0,0.1)] backdrop-blur-lg py-[10px] ",
						children: (0, a.jsxs)("div", {
							className:
								"marquee-content flex justify-between flex-nowrap text-2xl p-2 gap-4 ",
							children: [
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
								(0, a.jsx)("span", { children: "$WAWA " }),
							],
						}),
					}),
				Z = t(8733);
			function X() {
				let A = (0, s.useRef)(null),
					e = (0, Z.Y)(A, { once: !0, amount: 0.3 }),
					t = {
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.2, when: "beforeChildren" },
						},
					},
					l = {
						hidden: { opacity: 0, y: 50 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { type: "spring", stiffness: 100, damping: 10 },
						},
					};
				return (0, a.jsxs)("div", {
					className: "relative min-h-screen overflow-hidden",
					children: [
						(0, a.jsx)("video", {
							className: "absolute top-0 left-0 w-full h-full object-cover",
							autoPlay: !0,
							loop: !0,
							muted: !0,
							playsInline: !0,
							children: (0, a.jsx)("source", {
								src: "/Section3.mp4",
								type: "video/mp4",
							}),
						}),
						(0, a.jsx)(r.E.div, {
							ref: A,
							className:
								"relative z-10 px-4 py-12 min-h-screen flex flex-col justify-center items-center",
							variants: t,
							initial: "hidden",
							animate: e ? "visible" : "hidden",
							children: (0, a.jsxs)(r.E.div, {
								className:
									"px-4 py-12 h-fit flex flex-col justify-center items-center bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-lg",
								variants: t,
								children: [
									(0, a.jsx)(r.E.h1, {
										variants: l,
										className:
											"text-3xl font-bold mb-8 text-white md:text-4xl lg:text-6xl",
										style: {
											textShadow:
												"\n              -1px -1px 0 #000,  \n               1px -1px 0 #000,\n              -1px  1px 0 #000,\n               1px  1px 0 #000,\n               4px 4px 0 rgba(0,0,0,0.2)\n            ",
											WebkitTextStroke: "2px black",
											textStroke: "2px black",
										},
										children: "WAWHAAAT ABOUT ?",
									}),
									[
										"Why did the sneaky Wawa cat jump into $wawa ?",
										'Saw the market bounce and said, "WAAAAWAAAAAAAA"',
										"Hissed at FUD, held tight to its $wawa bags.",
										"Diversified into $wawa, $wawa, and $wawa.",
										"Now it lounges forward, smug and unbothered !",
									].map((A, e) =>
										(0, a.jsx)(
											r.E.p,
											{
												variants: l,
												className:
													"text-2xl mb-6 max-w-3xl text-center text-white",
												style: {
													textShadow:
														"\n                -1px -1px 0 #000,  \n                 1px -1px 0 #000,\n                -1px  1px 0 #000,\n                 1px  1px 0 #000,\n                 4px 4px 0 rgba(0,0,0,0.2)\n              ",
													WebkitTextStroke: "1px black",
													textStroke: "1px black",
												},
												children: A,
											},
											e
										)
									),
								],
							}),
						}),
					],
				});
			}
			var q = {
					src: "/_next/static/media/Shelf.542c0fa6.png",
					height: 319,
					width: 1100,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGPcunRxGjsnZwAnL7eEqCCf+tZj62vlJbh0ddSsEv7/Yypm3LV2zlF2di5dVmHW7ywcrBzv7j/8+PMf819OIU0hAfa/ewCqAhbMXuoTvwAAAABJRU5ErkJggg==",
					blurWidth: 8,
					blurHeight: 2,
				},
				_ = {
					src: "/_next/static/media/Blue.8e17fa41.png",
					height: 778,
					width: 1472,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhklEQVR42mMAgdnNHclHdmz4v2XxnM0MSODjm8vMDF9f7bI/tH//nU2HX/w/f+nO7z+fL6379ulmKVCeCazq4a1d/zdtWPp/79kXf+4/vPf//4/r///9vPP/55dbJ588OCPP8PH1mb+XTm/4++j2sf+f3lz7//vbjd//f97++f/XXaCi248AgiBWk3HO2ZsAAAAASUVORK5CYII=",
					blurWidth: 8,
					blurHeight: 4,
				},
				$ = {
					src: "/_next/static/media/Orange.ac4a6773.png",
					height: 778,
					width: 1472,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAg0lEQVR42mMAgblNLcn7d23/v2nJ/M0MSODjm8vMDK/en7O/tH3RnZdL+/6/PLrh94+vN9f9+HitFCjPBFb14Pae/zvWzv7/bMfKP29vnfj/9+ft//+B+OeXWyefPDgjz/Dx1Zm/F89s+nvn3oX/H97e+v/n6/XfQAU///+6C1R0+xEAVmpWAOeDx98AAAAASUVORK5CYII=",
					blurWidth: 8,
					blurHeight: 4,
				},
				AA = {
					src: "/_next/static/media/Green.103d9caf.png",
					height: 778,
					width: 1472,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhUlEQVR42mMAgTmtrckHt2z9v2nhvM0MSODjm8vMDO8en7A/e2rNnVtPN/1/+PjA758fr6/7/vl6KVCeCazq4c09/7dtmff/1rMDf168Ov//3/db////vP3/55dbJ588OCPP8PH1mb+XTm/8e+/62f8fX9/4/+fbjd9ABT///7oLVHT7EQCP51bCheJoRwAAAABJRU5ErkJggg==",
					blurWidth: 8,
					blurHeight: 4,
				},
				Ae = {
					src: "/_next/static/media/Blue.69fa4377.png",
					height: 830,
					width: 632,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAApklEQVR42g2MPcpCQQxFk0xmfO/ja8TKUhRcgNbu2tYN2LgACxsbURDEvzeZGwOXWxw4h7e7w2M174uBb8JeVXjkGO5q/7Nuf1Ml9ykTKEm8fbZSv69za6BqFYMFMiejDGloF8BIk1JKIjEqOS/FgR5AlJwCUykdNXivonnarAUUhjsQ2eH7PqpqnjAzETGHJYYaWR5peZ6u68XfeGipGshL1k6ENz8ePlqkk8m09AAAAABJRU5ErkJggg==",
					blurWidth: 6,
					blurHeight: 8,
				},
				At = {
					src: "/_next/static/media/Orange.d1794297.png",
					height: 830,
					width: 632,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAqklEQVR42g3KMW4CQQwF0O9v7wyslKQkRZQ6dSIlXc7IMTgBLQfgAFTUiAYJIRC7a3ugeN2T3Wp5/fj5tfQ4JW1Us+rCsy3i0rftBhB5L6Zoohgcaw4eRwiQEalCnyvQdxbMbEcKUboOnsmIAFW/mK31TxBSWgaGKeD328xmpovIxHgfADxXLcjIvYH6omoo1kQA6ShwlmoH9ufP77+3nKYI9zbWObO+/j8AvLZR1FcJynIAAAAASUVORK5CYII=",
					blurWidth: 6,
					blurHeight: 8,
				},
				Aa = {
					src: "/_next/static/media/Green.d536e698.png",
					height: 830,
					width: 632,
					blurDataURL:
						"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAqklEQVR42h2NzQ7BUBSE59x70t4qUmlCumoQ8Rae1wt4DTsrtiyEKPqreo9byWxm5psM7Q/bdxotPYG9i6hWK+3bDhnP5iOD4MUQSQiAFUL+rHacPfKzadq0z0BkCeBvB8tlUV3r+pOixwWKFDAMx2vWWgeKNSBOfaMISkvA8TRKBqGBtfK/IALKojmxm8SOcaQQkSgAcN7nyzG7LeLVRKhrO7Gi2TMhzOYHq8dCXmYluKwAAAAASUVORK5CYII=",
					blurWidth: 6,
					blurHeight: 8,
				},
				As = () => {
					let [A, e] = (0, s.useState)("october"),
						t = {
							october: { wawa: $, scroll: At },
							november: { wawa: _, scroll: Ae },
							december: { wawa: AA, scroll: Aa },
						},
						n = {
							hover: { scale: 1.05, transition: { duration: 0.2 } },
							tap: { scale: 0.95 },
						},
						o = (A) => {
							e(A);
						};
					return (0, a.jsx)("div", {
						className: "roadMap_Container  ",
						children: (0, a.jsxs)("div", {
							className: "flex flex-col xl:flex-row min-h-screen  ",
							children: [
								(0, a.jsxs)("div", {
									className:
										"w-full basis-[60%] mt-[20%] sm:mt-[0%] flex flex-col-reverse justify-between",
									children: [
										(0, a.jsx)("div", {
											className:
												"flex items-start justify-center lg:justify-start order-1",
											children: (0, a.jsxs)("div", {
												className: "relative w-full flex justify-center",
												children: [
													(0, a.jsx)(l.default, {
														src: q,
														alt: "Shelf",
														className: "max-w-[95%] mt-4",
													}),
													(0, a.jsx)(r.E.button, {
														variants: n,
														whileHover: "hover",
														whileTap: "tap",
														onClick: () => o("october"),
														className:
															"absolute left-[29%] sm:left-[30%] md:left-[30%] lg:left-[34%] xl:left-[31.5%] top-[18%] md:top-[14%] xl:top-[12%] w-[75px] h-[20px] md:w-[150px] md:h-[30px] flex items-center justify-center text-[10px] md:text-[15px] transition-colors duration-300 ".concat(
																"october" === A
																	? "text-orange-500 font-bold"
																	: ""
															),
														children: "October",
													}),
													(0, a.jsx)(r.E.button, {
														variants: n,
														whileHover: "hover",
														whileTap: "tap",
														onClick: () => o("november"),
														className:
															"absolute left-[29%] sm:left-[30%] md:left-[30%] lg:left-[34%] xl:left-[31.5%] top-[34%] md:top-[32%] xl:top-[32%] w-[75px] h-[20px] md:w-[150px] md:h-[30px] flex items-center justify-center text-[10px] md:text-[15px] transition-colors duration-300 ".concat(
																"november" === A
																	? "text-blue-500 font-bold"
																	: ""
															),
														children: "November",
													}),
													(0, a.jsx)(r.E.button, {
														variants: n,
														whileHover: "hover",
														whileTap: "tap",
														onClick: () => o("december"),
														className:
															"absolute left-[29%] sm:left-[30%] md:left-[30%] lg:left-[34%] xl:left-[31.5%] top-[52%] md:top-[52%] xl:top-[52%] w-[75px] h-[20px] md:w-[150px] md:h-[30px] flex items-center justify-center text-[10px] md:text-[15px] transition-colors duration-300 ".concat(
																"december" === A
																	? "text-green-500 font-bold"
																	: ""
															),
														children: "December",
													}),
												],
											}),
										}),
										(0, a.jsx)("div", {
											className: "hidden xl:flex items-end justify-end",
											children: (0, a.jsx)(i.M, {
												mode: "wait",
												children: (0, a.jsx)(
													r.E.div,
													{
														initial: { opacity: 0, x: -50 },
														animate: { opacity: 1, x: 0 },
														exit: { opacity: 0, x: 50 },
														transition: { duration: 0.5 },
														children: (0, a.jsx)(l.default, {
															src: t[A].wawa,
															alt: "Wawa Couch",
														}),
													},
													A
												),
											}),
										}),
									],
								}),
								(0, a.jsx)("div", {
									className:
										"w-full lg:basis-[40%] order-2 py-8 lg:py-0 flex items-center justify-center",
									children: (0, a.jsx)("div", {
										className: "flex items-center justify-center relative",
										children: (0, a.jsx)(i.M, {
											mode: "wait",
											children: (0, a.jsxs)(
												r.E.div,
												{
													initial: { opacity: 0, scale: 0.9 },
													animate: { opacity: 1, scale: 1 },
													exit: { opacity: 0, scale: 0.9 },
													transition: { duration: 0.5 },
													className: "relative",
													children: [
														(0, a.jsx)(l.default, {
															src: t[A].scroll,
															alt: "Scroll",
															className:
																"w-[500px] sm:w-[550px] md:w-[600px] xl:w-[750px] p-2",
														}),
														t[A].content,
													],
												},
												A
											),
										}),
									}),
								}),
							],
						}),
					});
				};
			function Al() {
				return (0, a.jsxs)("div", {
					className: "bg-pink-100  relative min-h-screen overflow-hidden",
					children: [
						(0, a.jsx)("div", {
							className:
								"absolute scale-[0.57] md:scale-[1] top-2 left-1/2 transform -translate-x-1/2 z-40 p-4",
							children: (0, a.jsx)(g, {}),
						}),
						(0, a.jsx)(R, {}),
						(0, a.jsx)(J, {}),
						(0, a.jsx)(V, {}),
						(0, a.jsx)(J, {}),
						(0, a.jsx)(X, {}),
						(0, a.jsx)(J, {}),
						(0, a.jsx)(As, {}),
					],
				});
			}
		},
		5161: function (A, e, t) {
			"use strict";
			t.d(e, {
				ClickProvider: function () {
					return i;
				},
				e: function () {
					return n;
				},
			});
			var a = t(7437),
				s = t(2265),
				l = t(5303);
			let r = (0, s.createContext)(),
				i = (A) => {
					let { children: e } = A,
						[t, i] = (0, s.useState)(0),
						[n, o] = (0, s.useState)([]),
						c = async () => {
							try {
								let A = await l.Z.addClick();
								i((A) => A + 1), o(A.leaderboard);
							} catch (A) {
								console.error("Error adding click:", A);
							}
						},
						d = (A) => {
							o(A);
						};
					return (
						(0, s.useEffect)(
							() => (
								(async () => {
									try {
										let A = await l.Z.getLeaderboard();
										o(A);
									} catch (A) {
										console.error("Error fetching initial leaderboard:", A);
									}
								})(),
								l.Z.setupSocketIO(d),
								() => {
									l.Z.cleanupSocketIO();
								}
							),
							[]
						),
						(0, a.jsx)(r.Provider, {
							value: { clicks: t, scoreboard: n, addClick: c },
							children: e,
						})
					);
				},
				n = () => {
					let A = (0, s.useContext)(r);
					if (!A) throw Error("useClick must be used within a ClickProvider");
					return A;
				};
		},
		5303: function (A, e, t) {
			"use strict";
			let a;
			var s = t(5482),
				l = t(5040);
			e.Z = {
				addClick: async (A) => {
					try {
						return (await s.Z.post("/click/add", { country: A })).data;
					} catch (A) {
						throw (console.error("Error adding click:", A), A);
					}
				},
				getLeaderboard: async () => {
					try {
						let A = await s.Z.get("/click/all");
						return window.localStorage.setItem("ip", A.data.ip), A.data.result;
					} catch (A) {
						throw (console.error("Error fetching leaderboard:", A), A);
					}
				},
				setupSocketIO: (A) => {
					(a = (0, l.io)("https://api.wawaacto.com", {
						transports: ["websocket"],
					})).on("connect", () => {
						console.log("Socket.IO connection established");
					}),
						a.on("leaderboardUpdate", (e) => {
							e.ip === window.localStorage.getItem("ip") && A(e.leaderboard);
						}),
						a.on("disconnect", () => {
							console.log("Socket.IO connection closed");
						});
				},
				cleanupSocketIO: () => {
					a && (a.disconnect(), (a = null));
				},
			};
		},
		5482: function (A, e, t) {
			"use strict";
			var a = t(8472),
				s = t(7392);
			let l = a.Z.create({ baseURL: "https://api.wawaacto.com" });
			l.interceptors.request.use(
				(A) => {
					let e = s.Z.get("token");
					return e && (A.headers.Authorization = "Bearer ".concat(e)), A;
				},
				(A) => Promise.reject(A)
			),
				(e.Z = l);
		},
		3054: function () {},
	},
	function (A) {
		A.O(0, [141, 699, 241, 173, 850, 971, 23, 744], function () {
			return A((A.s = 9256));
		}),
			(_N_E = A.O());
	},
]);
