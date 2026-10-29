Warning: truncated output (original token count: 18331)
Total output lines: 704

/* Marysia — Bosch Home Connect Lovelace card */
const MARYSIA_PROGRAMS = [
  {
    key: "dishcare_dishwasher_program_eco_50",
    label: "Eco 50°",
    aliases: ["eco50", "dishcare.dishwasher.program.eco50", "dishcare_dishwasher_program_eco_50"],
  },
  {
    key: "dishcare_dishwasher_program_auto_2",
    label: "Auto 45–65°",
    aliases: ["auto2", "auto4565", "dishcare.dishwasher.program.auto2", "dishcare_dishwasher_program_auto_2"],
  },
  {
    key: "dishcare_dishwasher_program_intensiv_70",
    label: "Intensywny 70°",
    aliases: ["intensiv70", "intensive70", "dishcare.dishwasher.program.intensiv70", "dishcare_dishwasher_program_intensiv_70"],
  },
  {
    key: "dishcare_dishwasher_program_quick_65",
    label: "Szybki 65°",
    aliases: ["quick65", "dishcare.dishwasher.program.quick65", "dishcare_dishwasher_program_quick_65"],
  },
  {
    key: "dishcare_dishwasher_program_night_wash",
    label: "Nocny",
    aliases: ["nightwash", "dishcare.dishwasher.program.nightwash", "dishcare_dishwasher_program_night_wash"],
  },
  {
    key: "dishcare_dishwasher_program_machine_care",
    label: "Czyszczenie zmywarki",
    aliases: ["machinecare", "dishcare.dishwasher.program.machinecare", "dishcare_dishwasher_program_machine_care"],
  },
  {
    key: "dishcare_dishwasher_program_pre_rinse",
    label: "Płukanie wstępne",
    aliases: ["prerinse", "prerinse", "dishcare.dishwasher.program.prerinse", "dishcare_dishwasher_program_pre_rinse"],
  },
];

const MARYSIA_PHOTO = "data:image/webp;base64,UklGRjJMAABXRUJQVlA4ICZMAACQSgGdASq1ARwCPpFCm0qlo6kwpJS7uhASCWdtFew85ff7zyJhzbOA54PlM/4I2PsePvHqY3RyMprXUk7dqRarRwDZSec+P/p741PWWbnad9O3/D9OLpEc8L6ZuiO9aH+n+qB54Xrgf7fCSPKl847BfN38z/h/bx/YM/fyn+L5v/al+n/ivbj2t/sH8n/2f8j7B3ujfseE/5voF+3/1v9mvWO+y/9X+W9T/0//Df97/C/5D5AP5r/Z/+j69f93xqvsP/Z9gr+g/5b9qveO/0fMn+w/8D2HP2R67npGF273arPqqFhlUkwtuqDt5KyaugqVmIPLXaVEQiu+EJ0NA5MrQMo30T/vxQl5PGZ4dLFYIy6gjUpWKv8pdS3E0mSXDgnjdkW8mV1qnjMYrd4MPWrhz7dda+7DKcPeIKnLX6ErL74sKmaRqO2RHl2HjbEDM72zkZb5bd7F134Y/LpVIg9rT6MS/Y2n68Bgy+oEyn8NFuJY/HWwdnBzZR0gtBRO36N5jfRLBcG8fkwVZOXlrttJJMsSNfxZ7pTWt6Cn1FAEEGEVODT2rUocil7qGWTh/9dpG165RiqQg42x8La4cxRAbkOr28OPjJhcUYH6hfK3j3/ev5SwWDo5U6M9ED5SZl2yoqDnBSMWVf158jVdz6ZRVK1iH4hiO0jRVg7lEtj2ox5MyQzb5IZ6Fw0WDkMf/SoH+t1ma1bE5zh6Snm31U34wijj6TRa6rGRDKLTCFvGaJNWAIU3Q40OBmfeDQbYBDM2HRSRO9UIHPEOqdS2ZmvfQiT/QH3xWUvVnf85HaLQlSiAwG9rxP3urFvpJjV9njJU39LVM3kAT/a7DkNl+mcSESUmqdn0haRonZdsqf6N6cTkz9tGt56IAx+Kvj5gJZENeYzElt5ivrw4RFZhXfVzYHgik2uOgQcxCI41AbDAn4rB9WfN+KX6IPTlVUX5So/TqmRnHTQUZah8UShSUwvbNU1yJRzj6i5NNfE28l7ibncz5oB8bMEf8yeaLhoeLH3RSiiPLO+q6rumobayQ8gXq1uFWzb9PFucCfyoTwl5Uk9+muV1nzVzNuTu5JCX8foWuc62sx+j1Kf34im4ebM2wNoym+PeyQgtEEZAhmqppUpEP1XDMz6uqohpW8BSWFtd9/yWYyi77Gg/6aNhe/rjp8QjiL/oR8QP9JAURoE5OxP/kfX94p9JKbzs4lbamtYI2YC4xN7xCA8C2AmS/pw/awx7EaOYG4OA8g+YIqnf6dvnhQSkLFUWb/nEJWuGYIoaIWx6niJyN1vk16HVVhFVczkp1EtdBz3l0emuYDXz4V7BVFSIJK2cFOjRRSiF2d8u6hiXx+FqB9XNsxz82oTqJNPlxbVzy+XB7C5+rpF/M1/YrykVh+LaxaeqmOuRzL7i/SC3kkxRTAzXULBN6W80RVrWNvn6445JXssMO4b8SWKtg1w+DStIT9EA47l+tue+IKtFz2aQ+8yB98wGPcv8JmaMWhE2sW/qSDjyDxsY5/iIQRv3FvrPiQCB/khP4cuPwsW3E2ZvsdBDj2Mtv5R5hdcayc6R6ks4UIQOKWqX86hzo9XhwXLZzMNk5A0diksiHphTKyP/kD9un1qpBjrxE1aYChLpQxU8wKQmc7NJq1P9i4fxBr3UgCAYNs9QuarNcIliBawWSwPBccgoiGAiYV6BA0CgjITTgDFCcoVGUKbyT392SD2LLF/q5tX+FCuiUGSO5/t1PD2q21ihvLUIKOf7uImSGB+2jAhAr+7Az3cBYw2G8W13AisEImVgjHJqTYdW3CljCHz1hy7OLmT84Iijtsuw/TbKM4ou2d1tO5QZnzanwICWMwImeVepK1nk8kuKKSTstxX2vvJ4+f3exUc07zM05DpMFsbyaXFM4qHBTKlLeR6X31puP35//LfXKk3W2x5fmYbKIdNBYQaADQ4a1qvky8GM1ewpD+/MObC9ebF40wyRQPmG0aHPeZxAux3R485upEeQ4uNsAeHLDLGbl5giD4h4Ub5qi4iwxiXk2fHBGKjgx6NlsS4dFgWcabsu+DWJp16/U4FATRdvHkUuEkMNzbSixKJsuX1hUAv2Wm0pJ+Fddh3y+RzpSANF2yOuZJsre60sBdOJnhXRf55l/Uw0s8eKzLE8roDC1rxsRZpNxpA4Coy9RFqAJCgbpKf4QbUL816FLNYYPcvnRl1rw++CNF61XpVs9Ys9NtMvTiRxFeAK44Ec8wHQ0SiHzwLvBBcxwVLW/K3GOhXPWgZxXI5HIAvb/jHDv82u71Kay8ooh18ONgLt+L8VoIDDL9uETdG5pvJl5gz5e+TmS5Xr37LwP4Es17VsKzq+R72SIIZugWPomVtAXq8jP9Ts+vMI3i9g8OMF7NxZun08zTmAYiDwB1qX8uL2VuvtpnoSzJz9RGsHDqVE20O5NNHt6TM6YtpRUClzBgDkW3SGn6KC1nb0aBP0hpeJ0iYuYKYoWT1/cwqQ6MO3F4PKI6rgq2KoEzTTeEE8rr9AA3hmBpNQyc6dsWLRmk/5VNw2vj9hE8FySjprJPk4T77VNU6R7UcTrWj/sDTBeamHPKCeJU/TH8wUYXSKui4+bePqsXoWvfU129EYxqoE9uJY/nkRD0RaEInQtCaBLZgVhzsXxvK0BQEyD8QTBlc6aLGBMvteS6am/dkavxlti+oLOkaQY9YS67IXPw9RYurIU0AnVKV5TIfBA4YZushUKt1nYRegrQ7TFmYhuofAxgFeF1r8zj0vYhQ6UUQaSrhwUNE4Ls/l4o6AftyKdh4KMVhoNMHNiWRQKOLsVCjPXPk0HKLSYvG+3dWpCgafJWYX6yWO6b452QSj7YyFu4MLqeKczvXFQ3SKCHM5f/uZyRO03W0OL2IHDO7iiFC0yZUaXJ78ZwL4pX0pin6BwAZzsU3LjxXkPoa9bvW/GPICebjekjtQC6UnHM8DTNhdXcEhyB+H0W0sgUfOygaTHqhuRot4gnrL4ydDR92BGRWWXkzdoHo738H+JD7Qe/OXFePy50wLCz19CT5qgp7tB4AprAlRCw0T69bykR4//WXaLv8tPrt2pR3kWg6GaUh+fmjaEe3Wua3UwGicQnGep/mijFfoGiP6tfwx36zNrlmBWKsxicKYgUCx3KdAO503O/zeWZYfJJp+qYF4Bh9cdgQ/XP3M9BGPL7Oy6e9A2qk4OUJp8zsZPDV165qKf/qD0P/Y+cFBNLjsOYV5g7yJCll55H4zEo9eNDCGG/rBlMtYPy5uPyKpvRDEtgmXKqlGJLb0HWWQrC0ybHaaz6BfzMMysP1LbyzjeCWTH/Xi9nPAm0zUMpJeIuaHP/hIfkH5msEotAuSG6pp6t0RJ3eZOUWtkZ80W4Wr28/KFjKl3Dbz93LUoEdQsixtdw4gfnSIyTBS1ORK9Gj9xESD7z25F8G3iiPclBotuSZrqzBg4j2IWEOB0TX5UWe1Z7Ykddxn62Fx9d+70P1zSzoH+LT0/HveCBkjwFQVwoNSlmPwZzyk0CDQfTsG+R2igYG8SNwQorQAAP75ZFI+nwAzJ/adr801oYMpGEI2qt/Uqix0Ou3+64b3KxCYZ3cxB4pbbwAGPE4pL+iWER+JhKuEL21APrJEXQXboqp5OT2kNKcgmfywz5eCplu8U5MB5k7sIushX2qbWKsMc3qa3/eYwX631JOX1y5P1h2fv6tY/qW9/5WfaBtzY2R5AEvA383X8t02j/4bAvBeCcfDwDfm8I0MzebMVJP8zmwBkWzFepMBEs03Hcnh+kY7W06bIDygfMAaFSM2DwyzL/fPwrio4PMqLViq3HHBhz0AbJC3NwKCIm+deGlwHTbaBLM4l3Q+DvbwX1kkznBrXiePhROu+P+Db8v22LHYGtH2NMcXhTpszsnOCCwuWzvWSqi+wlhYoPAZljkCzCHsEeKdkXgObxWOiRaWiuP1WPr88Sx22D9bmTNkwlrFqFYtGg8+tNArSGxdOeq5tateBQ56A8wO2yLhrp8HR61Da+5O8Gi1ywQ1JgkTu7LmMkNMemUC5BO0wyY0+Vs3Sp5srYnHOLo792TucqzS0gXxQRLVwoj6r5WDXeeCb1aRPSPxq7hS27ptC6Y4DIBFcxEQBTVgym26ZO8klFYQhxxLobQIyIigmXotRwINQJYuF0RQqB2wUeO1bL32FCc8hLh5aNexdMwG79E2kE32LU26s536rw7g4V53UdrPSFSApmrCdSKlewH1mG3d4J4TTVqRNcj+DrGqMFGGeNchlzawHk8ZAZTfJObTE6fLpXtepgqmWAGDzblL0LKpIykAM90xOYC9aRarokOvo8Y+C3U/+10A0Pj5rl2DBjYGictUGWXy55LJoPSwOlaGrpKjeparum9ggIRdIdoHgcpp3C70MH6jhVulqVRSR1wZ5IZY5lqvWKUAxTDPLwIBLIou0r1hpiNJEzgLd+MLA/yYYy3eeJEj8vDm5kqMGhh6oAg6LRfOBQ2ojdotFNKa8Tt/zD52zGlJXjQ9djzVtmj4IdLHz8bVGm9euRg4BGhQ35Fsmn4BDgvgAHhNCY39b94HODs6lynrx7NV/1aLXE5IcgbvWyo/TaZX35W2ziiRTTliKKG3FI0cqlr8J/Ga6Sn4EqpE7XoAkTlFSsebVhtAmcLNe5TR8yHE9H3BlmZ9D/D9dfiUw7MaspbVK1+tun0wCgMoy8dw6LU68dvJXpB+pq8eZeBDs5Pmu2qZBHCeMlipQzIEkRj1JuA+MqwhVZWUcdltkztABZLrTt2Rru/8Opaph/IDVW5gc8D8hi2P7EIX1QBIbzDdovbZjodWM9y5Mszk/BzZAVTsDkmT75/kcg9n0hnAEfJLQy2FR9XgoEtP4x2XaZC1HW0lEwadZm4mRx2K2HiUjPjAwJsArz9onYAUeJ49Fv4EsISwgKhKxkw+Q47KKvWGU/V0JR15tBPT3PAn96j5/8sB40AGEzfUMSbFtrD2V7MgIfqdhkK6PCohGXL1AJ17eIKLlXcIWKK5ZlkAb7ojefaqR+9xWIuhnDy9WuFuxcFZiX4tDNu2KpeM0mt0JkyMIbhu52bgULrB5P6CRHCLqNhISH0f3cflmPxmEqDMabk/1Vt7+L7Au9o8wNKCRVsz2cALpSw0sDcJc3xLCyr/tJdtuD51IGnBW0w9q2pMMpEmYFEmv34/xpqohJyr8EAct+ggl/z3rV10CeBUYW4jMuWzbB53qM4W3Tk9fTzY/K9ocO0EOTJ8EjxdLE2t9r6B0jJjUWy6fk8oVqS7NREfQ5QLsfZi6cXkvuQtxfKi3uZNxeV51f8/+gl3xZrsedHKg413cT8JaLSfjAYrpYz/v4EYtX5tIWVyxPepN54Omz+4GbDS13Oy6WBRJJdxEvEhiG1ODZfTuHNOwqbp2pyax7FD+qg3SN8eneY4bU7lTNvc+RKYaDqMy8i/wRYsFgyoPL9q0nmZaza5SxdNBV5Nudfpjb5PCqWhdFo5ZJ+qHXibJz9GBv68yyHPSgrcjaGCi543ZPvKf9C4bufldf0WhvfAM4Rhfai49TgKuFEURMrvo9elQcRczZh7k6y25EqxYFMVRBgyUseN01l6ZoJ4yER/KR3rb4Vd5tnMSYHs6pU9Jnp1aRwpH7x19h5FALcp2hXxdqRZcYZIkodjIR9hfmWVmW+UOsPW6XfxUBGq/nF8G3R2uevRbYHGMsZ1A3gqMjZqSKkMEylPO4CbwMU0Tqm1cnI54+LgL003Iy7Th94x1EqB5e34P4MYZlMd73xEgFD9Nw+mqeqgnz/fgPbrRiMWPYMBYN9nZAxkD/5fwId9hI+qNquy7sE6sUs7EVEycNHS4eKOyv+FBitOkF3HDIYBbR0oOEG/7e4JowQlkiNG2V7FnFJ43xsf8UddZhABW3CN4m08oKP5kRUYNFx6N4Zym4j+3jx3ond7AWCvwNGzPH4Uh6l4A5eBpkEOnfmTIcKxlaX35+7Hgi1jb7KPvC1HY+mEkgwB8x3urBB+WApLESFbe5eJJrwtVa1c3CX9dHdiY4grJ205dB5fflx8XQG9SIForsoCqEr2a/h8HITqYJCu5oUd92PGVl933qBag2yuTFHVxEMsmD/5ZIBdK/GhV1vXZzb1lTXR3mBDS8zttW2cGfWQ7bMiQe6f6ra+KmNs4aXOKtyI+COUZQgaYcJIb1IeW5N8ddmFlmQroz7V51I3PqW1ZGue2EL1Y027Z8BiPpmNDXLp9qhK4NPSaYjUy5F5LbGGOxFOV3nVjUqBUwVULGYlPu/Z4o9+j/41lCI+PAwlcr0wi+QksKwRcpzXPRTVH7Ppep3m/GhlF2PoEjY1b3D+yghM/uWROURpaRYKO2yZ7p3yVnczZd3bWEtMYKL0NwPzZ7MU6U+BGVji6+xmpqoNh98oxzm4HWLAlSqQopGnVdhsWw//CcY0IfP/G5nQRijkZfPhsimUFsltc4/SgmoC+W8lZDSVohtoAMJFrtE0HfkUSywioE1FXDOHMkwod2ftcS+Up9JfxUqUDaWgFZNpe0SlV75lyXarfbPFvQIXFiubMwvDLR6s0wpufw5kZ3cczUD1YNcumx8y+e3UJ3wbVKtGCxgrPeRyDxsS55ed9TM0RqjbByxPcSl2hlmH5uAK6hSjROfVO4kb9jeIaChAx0Ngrr7Y9XkiQdXAxjgstAZ3V3MZGx59s4bSiQOovL47/xVwKn0gXP9SRxqLNdbbZdXBmt8bSYlKJwSUCHwXc6DeptdQbrPWSMQCXajRDJmDj6hT7TAadO64kv2oi302GyScGPmLGNdifEvEMgZ5CIp2Fb8/40ikRyrsB3kVpzKXJogeNDlTKdVCSLnpEzkoKB1k+NdWXejRa+7sRwo8TK2UAfPmtTAIvTh3dBHmJ8jLvqZtG7P2vvzyOuSYxSyHKb282XrsWHw7tOftsdS7lFDa84ADcYdWla0LrvdJNcIvi2xEyDDuNjAAKGotZ0TekW5Ik0+BsxLPmQIniOXJ4iFTM1dVU4LJXHTe09q7kxlLggeFTE86SHPjvrTLgqxkOIdlRi945d1EY1KPl45NWelpTBm6MfRrWouhduheuWrNhl479HSu6L/vqS0Yh6m7eNiEAJ7LoRh5WpgMvwEMbSSnwDkrjToKngASr5YFCEQeLA0EFv4MMLF2gsOffOafHu3+2+ZuOv0BaMA/megU5bFiBG/vfhc05s9cRoxaPQXpLZYBeviQu7igwK7dpOAU5sdg4855vm+BK7Zp1tkiyOpiCBc7ZrJXtUauPTshpLYuAEU1w1Xdz3Am1NIxtMXoxWtX2OjH316m07FPsviQtcot4WAwL0/n3lTATu+7gHP70/4DhOAHK6fBfVnf5cnuaywRUng+RU8VDo3ZJDxWghe5TN6ZuJtRPaAaTvfih73/t4EFtoFvtX68Op7UDG5CbEzZf9D2z8/f1pT/RIcPouqaSH9G9BwnPuSBCHk+QHlso6SHNeNOFIAZviv1c989m7tc2uzrIRFequjpu32Dx7H9Ozn1fMH929nr1Cm85CI6f0Au9jKgf0a8P6p1ND48f4qrFg2U21H2NKVrYeUvGp+uJ/ZOhtmtA1vZ5k09anvOMFPt5LW4MftOVAcb6H9nwbc7+AdFmAM5Q1IBLzZ5JKCl7e+xnefCdH9cEb4kR66mGO87LvElkePsBEdUKluFG+4jW859k6BJ2RkyHFvo28VhlNvwDnU80/aC6JYFaPCdcTP/iRQnC0rQn57PRomKB2CPTVyfGfJeNifPJyFkplj9oNIaNBPKbeW3DI18+MsRhrWFcufik69a8I1mtxRugHvFrAiaxLVzteilGXxYvb5WgmF8PBZKK7tV4BPP6+Dt+XKROpnlhkN7QEnUMQRmUmWiFSsrCuRFV9sBtv2c87NGzS6jwtlQnaZofjikBiXkOZF0Rz9A0hsh5PcWXhA2SNBGexpR/dnjjQD7gNK9ETLWzOXbE7THlESyfo/4zuQHuyLi65OSk6FCk3SBWxi+7K344BM13y8UEX2/vBLXV/Q4aDhygHu3OZEbJRVqbQwM/0iEEwOH9YsdrnG7OxG1IHsipKod9LFt2fPe31+9x2cghh0/B4letVAtFd58TF8brwyVmFHa1L0FRF4ZMdcYI1nynbqGfIyra8eyxeJfamrzAXbZE24QgwwIVSGcGYuKPcL4figpbbGpqj4vm8E3rZGTd1kf/4TBL7FeUfeYF7ruW6DEwh6nPwJkK2JUjGc4IU55IYan3YkekLi2Sh22J6yrpA4Y49XWwWQzWWGZ5jTG1lfiscssSbwRoRywKkn1EsMOsfjoC+D8GHclEH1+GmLnMTzIhKWBGVVz5SQZ8P7pmDSvB4/A/d/6m1BqTC5v68BINmef87ZsByQGgWD+u1My4T3xV0aUygPGBcb9C1agy+cabAne+vQipxbuxNg01GBSl17krB/DRceTSgqVbrwcfMdKYxSsAKP23oywjfPFMOLm/1d7JboIkrKzY7s7TK43YMEfAckT8NGcqWpX0vjI9zfD4fuevtW1SuARfxR7+RKcImX7/ocMLtLtMc9KL6g5qOfKyOb1CqI56EDze7+Nc/dm0AY5EYELquLPozZWBd6DnvmxIkyHVaPbFKOo1RQjUbytigAhsM63wv48WGcs8AQCeGeXVMb53eroaNwXA3RHewlJjLoQOqabL0P6WbPYdW8EXSY9VwiG3xWTiZVJj/NXRPFMFL/sZGKQ+EJ0aLzzTX7rY7Nbiqc1cWXuSQchD0eexiqcbpQWfpjiAe1khy8s+HIhZGcrRf39eT6hfkD6WzRcpXHGQnsYW2raWBKdA9pCrHYw0gXvNnZLsIThKCtBYAHMBKpW8e2vnoDbK3NN0g1wqhvdAIGFalOZ06DIYdXkVHl6Kkb1Oj3YIs0O7364w3C1CrTduEnCNHmi7tP5aGVYSBRnxxMsBW5AM1vUlJi9VE1ffHafxJDywayuKrPJG3xYNndKI5NHgY/wPnpJub3F1XX+UPRNN9MPBFf9CHNFYqbmPUUem64UKJcwAnwWfWWjxZO9hKWELsm2KkjeR1LO6VgredXewfnaH8vpnnUY5omb9lHv2aJzmUcm9/BUGTZ9mwsjjcddXwtRTa4aNU+6OsALwabggM0rV3bsggAAqd7ETvCyz7tLU0fm8O3wrA6HvLE9L+4F1PAeyStEIC7qSOYIh8UxEvIy7FWVc+5HZuxB480++Xihm+k+QWj/Kqx6etYrtXumMr0/5ZRbOmZyOZDq2G03isgk2IBUZhSqCAJoOoVvGOXxzZ5VNvpx6T9LPhK0imkGZMePwKWcV8IecgWQtGTEgu5013f23Tz72cE6GGubJ6M04gKQml6hbnHzZd5ziGaZAP70kcmnXMG88aD3bxuN73rpvVEFgM8z+3rL+8lkCQjBd6KlbNgib8VH83PIv6+DKSoT7P4v0O1cwyTwVEDGBvBBvnNanegeLShaEKtV9amopGieM7TWY55JIZjnYabNr6gVwTw6uQNDa8gi/VGdT1s+Vy1IGy9gW/VvzpuNznA7lKUkWMek5jI0SEFyUEfvrF40HYvWfbgJv+RHzjSy9aqap3EAMUR+xblxqdxCZnMpnpToa2d7N8yYqlyg6U87QWz8e+fPz/omks+XWFI/4zF1LMH0GAsEl0jVoclf1qJPv+abCMxU92tBCBYGSw2N2W/Y1buXHMJBWts4tM+xBktysJYKXSjvwbnwBoXyTPRpLrrqh1dVSwC/AyxhcHEflKNzoktPKsLZ6d6K6vF9kDqI9DzHaZdHNqZdA7Ddn37jGu3ySv092+ZFZHaVZR7ciC4A2ObGxALb/0yNGfSQ1fdatGez7TbyVVA7H08a32ymDNWgdGePAAKb8hyv+jds0UB/toJ6LLPMsOFOYJ5daYYAySKxjwY4x93Bx3AQiltxcWejBTgGaFeJQwWfye2Qwmtr3TyF7UPI9uArvgRbPQjo8JgcJSK5YdcpS1ywgLwDwxTBK2m4/d7730LXEndr4lcm8EO3oLUKE8vuEjRL2swPc33PeKkEcDW3/VnLl/kf3l7hjfM93rHo0WRSbYYUFTbkooQpBgD98O56jgmwgXhLNwPysjhvN+6jAVXYSUcJpnB4NzcIiJGASe6ahxWGbdjXm7Xb/wq5XDdSGhsbOqNn4AEeihWMr8Do8Vt3Oc73q2IJaWcbZG/TIo/T6tsk81X6p5ATyNX9BW7nVoDO55XtVjUJdzLdB8BXZWNwF7HbervJML5sl8dcdeXIY5yNJhotZwagYjTZVcN2FwBXz+/+kNUQsFZAmV2paZBcQTCezJz3CaAWs7HXDPHHeTWejvu6+SiRynRxa6HjAHw1YGjau0dqNKSwSdcHOsZI9wGetGjRT64OoPlz+uCA4G/2pup9ehBpfCPJ1nWOEYp9diWzlrZgw0DAQOTrSdGdTOyoao5HE+T1pzHDG3RXXVgAnijEZgySDinYWPQLcOZGC/7YmX7y2ibnIPsV6tvM/Z5pGmpPXWJuRzWYWfGxNcxuVZpT+3gRp5vDERW5OQuNDsq5cpUJxlUCnYFQVpbTXIfVDZSDkC1ZDpHA8pbym8Z7xln9V0TUgB9w1e4HVZbMZIzSXbIACpYYgKnkucjNyILSD3GW5kehIXD0CMutkKseZbf12PIb7INGoKP/zpeYJdGCAX5C5EkChE/Hw1HUXgZs3jOpXbwMNuOVBGvneGbF1CQ0z0hUajji4U9tLjdT8ydj9IFudADP5Dh25mxmFdP6YUExFHJaeZYxY91Kcz+kpWZptXtAOcdQBlamZ2eYbWMc9Y1qN3MkMMbu8XiSJtmrP+NiGPsghsZDsomRfSYV4kwgncrNK03wQ7MhnCAqQKbZdNcRyBziV6ae0aU3QkmK/TndKfcibdKC0AZDZNJutjV9h5Z8Gq9C8+y+IuIc9MNg7EWVYrCm0TVydbUu5SN+cyRaW0h6ZLdbsfn/txK8Z9qxuDfOnyURu6fbxdJNQ7zC2FsFKgjI1umys7o0MI5OaB6F6EjxBMYd8drWrCU1goAn2RWeKrc7Zbwp0YKFamxP7cZJAXOJ6VIZYCM0xWATgSPlk3Hyghxsi453qlnZw7QnynCb5Lh8hhyMEG2wx+5+dFgLtdnQsH8ch85UEFRA6uxHy4tSNy57DiApKB9RS3iwL5Va8bX0VwyILtgEgxVJaGO43Ur62xkcdgCbx8m+R/HiOfDeUBUqwZaApz4J0VvOnNrqruXpcHB2j9NisTc74NnDBS/JcOEpNGl1yVNgX4jf+xw+ThNN7MS7PDSKGQCrB0Q6n2Obpz+qXO7LSSdZ/LFt99E3WSkhIT1WHHA8aHoGj9IECqNcLnGGTJ3iSxYGI4NJkhtJ0Sq61p/qmQteSxMAE5QNTk637d/9J+im6NpG4xL1Igbv40O9/QAECAY+LahMmqAmBM2Kt3j0Hapeq0gyzNVcZmzWsLtzAusaKFFMz14l/9pX3oE0lrsAI5rfgd/zISGvWzt90I8FKoNBaBox7OjLQLbzVPNxmpqCbkB0KhCNwjG4XTWJhJ/6dzvNE7z76ELChdURZk04AIsxNU07EKRGlLnJf5EDN34abSn89lLPu1FPdXth3+en3+4H2ZH/bv++q+M4hj97yCE8HXxnmz2B8YpFiu4SXIwBWq3Khxo9ToOIvS4hbQezxluulNe53+dEyB39yWzJrLSqlt8ZLBAtn1u84Ucm7iHMWyRFujxyj26eZh52YVDYE/Nx7wscz8DK5O1gC3nMoyFg2DodCvPwUMWvLQElgbAJaBqMZ5Zx2HigpinYfFateKy2gDgM0UbkzTLrd0NBTwqfFa9AF0wcMFcnx271bUDI0rOn3tUCx/9n1tOIcXJKcc8ZyfjUy4bRasEsxsGSyHHnbETf7stM2oBjDjfX24CQBqFkliLFAsgzvGkQslCbDdGJXu5ddYDPa0C5K/lg9nvaFz0X/WZqKf4ACT9FaMkThuszts3Sus1q8SIFZTTS8ILmX2Emd2lF0335O/v3zSnIM5Cp8IyIjhfXyDasNkqOzuDtsc75ICJ/x3Ecp0GtB4AUc9t4nml/mmlkWOs3zsyXLV0SI++e6SbfmPHB2FRpdCAFXO62/+POIPAdvmD81uEsMXo9A+oUFKl38cYlg2a+j1RQRdT7t2z37368ZYCQ8VgPoTPrB6VHG4fjlJ+iviO+qWw6Sv3mDxz86rH786m+8hwrbSeqZBxSN3+9JKtvykNUqRVd25UQdkJNbA82ctUnguTHrAz4yx0ZPx8p0xSHO9OzkuHkqaWrfmRgoT6j+isixINdZV1+PkEL0aqD+2khfqc71P6HzIZG42MS6Bgr7+pVuO1pAvX84aSW8VsFXdI+DLuW21Ac9J0z0fds7XqpUlfJmNfcSAcb4Kb9+yeV4cnz2c5uZxjwe2zGwLlCliWpyj2/6rROyoOBQ8F0oioW0aKkq8K6zU1XsO+zutzTljXB915gCA1T5aVLM7ofKtsvTvOV9R0TkC/Euyj7YnlY/mrpfhxlxXdr3oVXSG8TKslhVYQ0RLUWCNzD8cKRcRBm3rF7TbmpD9p6ahiSHZwRHYt92AgZn66MVpjB2q2glK2CqOP9cMvm61pargAWFAaJ+N24Q7FZUxsqbAcJF61Z6dO3URAUxH+Gu6tM2FzKIkCn8grLIGWKVAfb5hXtT2exuwnoNOqkGiAmdfS1dFCKra+Ai8kH+uW/V6LRk956LrGShPPTwf393wdVdRQ6Wyqe9gnGCzXpI66cEsBZGtmNw3MaeBJ23y7SvCRPBQHwi7j92d6sde7UUorZ4nCVlcIy9eJf160zPVM3avXi0HwhBLZVpsWWlEM1bajK6bXczah9ACW2QYYSNl1Rt0J2sqfXHzDXrahfH01fXotX7DZ01S1NG8wIUKTW9gZoV12C67DU+NwAdS4TdnRbA9Zm0YSXqSg+wt7cbPgiltuqJxyjI0KtXeCjDom1ae6TQuVGgxzGsjJXW6c/RLZHbuuyqeOvDttDXsiPW+XXVRrd3AvJiTjpxLfu9VcUZPRI5EiNxEoRHXauDCqFreAi+9uGWEC7m9Yscy1KcVigmZv5aDboakj0Y99PmNPgnfFoGQJjoEUih0mwLc8dduvvJZP+PLXGCa94/4zH0tDw8oXuOOBtsIzFb2rvMXIiuCS6IWJUw9npwovNkHLK/Prn2VMlREtjXHPeE59AoxcERgt4GYTjwrp88hXYTmiSRDpNvYH3VJbJZzP7G9h0e+q76Ex2yhHWOMTwvdl35qJo/DLtFHwMqPw7gtP48t1HRVBGM2EBXaVASB7zlV/InXSNKo4pdlQpX61bhPmDnrDXRMNct/L5Xr2lv3MqfLGxV4L4KOb2Ma5N0hCN02tCHAAEkZ/jY74Eb3ETc4nBFTn46SPX4sW6IeMHL+2iUH+frtOCZyNO1F11GIuh7r0ZlKNekKjSi2t8H6uKTyduHscc2snjL+2tHRgNwjXmdu6oajRtg82r7aRDFgLo/HgvRl447RlIy6W6XgA0OXjAVsTZ7B6DYkmnV3gieAx+TmBDs4cAwOAYAtV1jcKALx5cPWKKZE7Th15CGzRI2LXsxQANg8NvauwfoeKRqScVLuP4LNpPIPpVlOQ7W9+jy7BxWbK8/n48xn7lIkb51zfz35TnUc1Itgf37MCfyJXs0f9JpCAbfv9laPKq5f9veGWDuPQrYCNx7PJDTWjCZ+uZeX+nZScv476A68gyg9BX6T9kADQpbxpVYRz8Cg0C3B8xhR1x0OgfDSidTaAEVnwit3cb2CSXXJsBj9PKFlpGr2EDA8T6K/q0Bhgx8MpsT1T+JYAufbMpj+tdSabNmtYFMGoGs1UCwTCge6/kefUw7fY6/2TAfn7yVJh+YwR9Gr7qL1e2/Z6FzZOsdO3Z+QPtXcn524E9OULQJXuveHZnerJEDHtivxWOwGuXm1BEvnSvGmmFTFiEWBqmlGYHkR9Ot4zCeVI41GOOTyl9D7h4YvTOidhDEWpD5LoetLQ3Sbl7BglRxcjgNIUXh7PRc+OtABvuI61TxMA52BMo1hT2PM6fgjNouIp9eJLA82I4zTIqZ77k2qk3thSNKBdyLTmlLbmwQLNAcV0Fxxlgxq4vdvtMdoZhn9nBLu1UR3UkVmcxzWr25y28v0VXO+VpipW/eY2xJ37IEyxbz8AIrpY1rWWkxBr9WorFlxeS5fynkBVAbuI4bCK/p9COPjfwf4UnWNzD16I6Y+47p/5DBtYisR4tVLxQBkQpCBPk0obdgIv091c9JpBpnWWDmWR7fTOzNsb1JLMz5LyeauKexG877UDU6yzoheFIOz/qSrXWYe1GMjQSGpykOXoXxwFMjzyLL4XljUtTzqy63YYc7666OIFiechKESfM0Ut5jG3bqS4aKEZgDR8cHiqlr9FxihUxScWhPkbLBR8R0f4tVpSiE/JvQdMHY6J6njnNI34tEIEQCG+0AngYzlDN6ZMB8wdgTkD+Lyvyd/iywVMM30rxhFfB7Ctm4RodorQA6gscd4S2DINCTx7utAmnWuCs5BNQD+nJA1VYrO6S638D11Gg2ffabEiQsiQKQrv/BmG8rGejVFF995i7xcQh2XBFh3Ez7LEGHTEeMPtYu8It+6bWLhLNRrvM63SIIDlZHfwlyzKoqEh1Z5X/4BXGOQhTKfoH5nHR5aXg4RbN0PPSPOFf69arsY7a9Vyu6QrueDtgaVAlvCi/bqMJi5+lZEV0WKDFZy3SKediVupGtKg8WbtaA1HmTl9aaf8cVOpSlJcTR9Et7ik3iiXfUSGfb3POnXcudavQpu0JO+R+YpaMXO4yrKi0MRzgr8RWE9gf5BdPnI0GMP3dJPqq1CT7zWuBZCBI6aMpRbUl7hHWd6TXgMGPgiVU6hLAchUpNaYLJFcpHuL8q1HN1Iidb2wiHdc6+pfNiJ8fz0HOy5NrKlpg3GA4jXwbzVDJJ+Ue9ThwbkhjPN1J+MRG6qxU3i02eLVR7kK9IbRFSm8wmqEB5t26ycJ/aHhO2mX+XYPGrrp0kc9x587OZO7yLiARKok+OmZwCXi36x3DHB2Hk32zV2WPCWY0jTqNe+bQkYARlvTOXU5l0wqJBdRmu3jNW1Hgyjb8IPKtSvl0cIUPv7K0ZRwi+aVuRJUT6zWycrWh+ZWEW8RJRX5e0Z+pQOrgZTsoCZYxxmjqR/wewfsvuZFD0ITRyrmrEixJdPdHtxJy+A/dY2DP27SHjn4GptuFbixVSg7QCR6NucvgHVDUdrBwiYBOgWShQ3BFvOrC0NxBD/ue8gsNQfpuIp7xfzY7BnwM9HCTVrZIKADAKeOt0tnayic7SRk6oVnQdWQkUhePgV/O4fW0gLv0AKV6u6++VP/S932NC81nAr5eVBDt/U8sBCjgzGW4CLMTMAW0qQzYCaED/7yWX57MlT1Keqy6IQ4MSczS5+AvJwmbhA0GA1yJZRXa626XLcf57u53sZm7uzVqQBQmkktt2MGYVTyF8uvFnu6wzCLJ/a5sopTdh8AHoWr7bo7qA+eQURbRdqAy4+enicW+V5xT7+3BNfaVs7cB0rXhmRJGVGdBDnS4Q+2wrcx+HodmhH8L/RBWdWeoHkLoyIXnh5Oyb1WqIQtrGeYMMAB69iH6Knk3Z1u5lZCe7xg+7voOf/ueTKhSiHVKMlhPzpwC7Zic3yQhsOmJPj5caNXEWzuP5srf/CAlXMeZyDNrkjVicQcZDPK93jWgNOJK3JTLydcR8+3YvUYCxRK07B7oktdeyqEKOWR8lg8ahrvajgngnCrVxvjpUSaZz1PVZYTQjv5mTtiubOxatOHs0oUrIyytvs8+XG9QgWWG4mE4IlX8jO3jPnoVLxyebml/Ey8FKSO3P9z6EgOWXvot85Ari0114uTNhkLw+n1blFOFL7UC3cRZt2ZCvG+uEXRCBYRh5xFd3iFpVfQ+vccPw+FoJpqDL26xZeuq01kg32jzWs9b9JAEiKUpmsEQH09NzUoAN6P+bv7B6guxup1CZQnhSxYDH6ue+leD+ljkoplZghxm0m1yYxPkIfJ6uuZVDkX5QkrgmV8y8PjDMBAAwTED8kCnBEJw/GSM/lJjiW0CcnEwbfmvZzgBr3Qg58VvHfpSChfAQj5PBYhUXxY3vSMRV1JnNe4I4VW3iQD8alhxvC+3MXwAW+zFHMHNF9svTNi3bauAwPmcFE9mM1fSXAUMNo6h3MMgyNkIA0TqyTTZ9yBQjhXkuq2Nt/+SNImIjGtdG/2N3y8m2MqpZgLjwLVw5tt8f3HEyTp3rqfBF8VELy/s0QCsLMqCcfdv9ybNB/Vvie16XD5iCtl8s7ZZmiWWMNZqZwp6TcGo/vahRL+jnlhRC5DVSXWI9Vlu4LBr9kDf3W+czDOTrzmHULlwhtXNMjd7a6MhtNi7o6iTXH1VlCR88T0NxwhoGxCtK37zTux7I+ZhfGnewbd0V4J1wriFD1yDF9ERdKnNuRzYwxXHbutKW9uhJlBQ6hymk9IvvpkQ7rS3o6kR0XnHsM/GyMsU+6mWGizy6viJhxYAS52pXOsbajKjOvUsmhvEJ7xR6b/dE8olF8O7D+YTqyZxoKtl2V29rcxQF2CQ1a8HVTnbNwYTknaNncsWM1RWzrgpvxdmMIrUoFaJN7PQ7EmTN2KkxUhvqMsNEC8VVYmRIwWK4lRB8MpdK8VTpEJygA4wgkotnvffFhMYqhdqR17kZDMk9wfoxwRKxt//ORE5c4SdeT56vgCjQWnjT7IUhh+NLyHBr9E/O4HrzKoEbCmHbYa8K24oUeSA+zOhtMERNMEkX4fbsVAeiMUplWhx2jnzNEqRPSmp9gjsd+re8Gl6QtdmIC2asp3vh/noMSjzsfPoFzuCIRZ3WWntn979Ul2zQLixOvngPjaCXiup8YF+Hx1RwZqAq4M3eXXemZx3qMPvgnb52fbdVZzbmXINtDbKMILYeWdgiBJfIMzsQdCNJ2NbrDzervpu1D+szdLpVhKJ96Kdgn0hrbwJEIN/Hh4rjnW53AEBl1z0j+FftfsThGJSKNpH2rcbUHHw8yS+MP3Oa0daKDY1p+PwqcQ9ac6Do3F6RFepzOqo2J2zOmBjcUgPukqTJCQfLXsbQLikRtUhgy44xW7NEiAKPV7elSY/1zIY/0ZyrtH31UMMPm9pJScwTf4/s6fo9Tb7DqgmTGsgFxkJEGX0YlqUvWOGfFX+pe59aCYu0nlZSczWYrms7AfPivf9auTufhvr7WcIoBaZRJXHDx5Pljj4jYfMm2TEIzLckDHmm9gKiUAe+JT/i7BaNUTAlYPgs+W0J4TP0mQfMWI/4yPaHzWzYeHiYuCIwC5A/wqdIj1lGns5fwh7Srg26bIdRGBbu7kUAsNVIUygtx6ByfsJN9DhJutOSBACHbekF3TdjFcwwWsGj7Z5SvAqdg5oB17cVewb4FFstEdtG9VX8JGzu3DBt0M4uKPqjoYRRjIgLWkPtg4MOuMrnM73v3naQPCsUqAEEzvsiFbdT6G/zShlvZGQJTvB47+0gANFdsRZYTldKONwJGFvc3Hd64NO3wY9OkNqkNr0i7LIhOyMDeS8gly8/jjQ1nozYKcpWn73tdjzk94FR7BjKOHQnBXqSjWxk9atMmcjAVGy72vWrS4OLn5pa2U0P2d+ZBrlSEjgA2WLTtIbgiGY4k3RinVbqtfz7TU1N3an0dQXtdGA2DLk98WiHf9g/wMSY2LhtJ/+IZKk953s1diGhv0VW7lGxPNG9cGkiNy8b+24tIxEFGHD/4yrg1pZ5xAnoNMQRROquHgHr51ULjuoEHtZSA9/ihvKbxd+zj8gMB3Ap1e6fwZ3bjxNicQE3biO82y7kUPgwRQdbq57cN736ISQA9obM9NMQbjg0gbeqWSQUGu7CLKLkmlW7U8Gd/wl6Msc2n7Lt3LR35MhJR63t023STs6ERmzR+UnqL/I8Zue6P//b7Kb6BbkhSvww3c3rQOQwoo7OTOfw3rSo9wMTytmwSBtFi4xhK3Y/12WT8/a2cgnIi1dJTYrDLoWUwKTyh9oYAq9HGQ5BfFYMbrusDBEP1S/al2K4UZ4uvkDORJYsoqBXiyI4WHnC/yVkuNtC8I3G7R/ZG2132PsFLDLmbHPTSkm5viooAfOQFAnPkDH2zzDjxZCmI3tHeK5hqUpP/XIOTPVIplK2hjuxRogdi3h7RS/M99mt35VsKgMXkJFEpXza1GCYlMi5a0g5nq9H1xsh/SgfVMaxGAinxRHnzF6F8sWiAQkKl3rZYi1Khzt74/8oVZmudBevcQuY5U62XnE6U7VwHBdRmga2UOzILZWqmV/HJ2uPgphiozTZUzgypbZgk3MqY8fXnWiLGk4m9PJOmvvsA2Olotid6QdYXEbU3a9xh3a8tW8x+5qNGHwiWhIjYAWxvK92cX8OfrXevCvXPfHpKAN+L3ZQn15VWLBvmPlGXDsEky+lfegX3Y4Slr0mNZAjAEhPm1I1QOpGLYtTDArnmeszyBwE6w161+dLcCJvRMmuxShKVIZlJNlZi5uKEOkec4Arde4Yhky9AEHPetV8d8JfboD8gUN1dkAyXKjg8VoJvHV+fsRc/WTmwQKlfJATWA3R03eZr2jgpmawHBAvzLjZNHCYjCHO4zpgTVMmLl3TCEjYjn4AMz6pe7ybiMGQIhBXmSAbco0hXiZNNfkvfGkF4geRuqcP0VCWe+ALxodh2A25LO/DFMKOhdjsDIVKHFq/t55ma+tge/vBaBwZzdZSW8uEdHv185npFsc83bAb4QxX3ARDsiFOhIG5oRa6Lmcqal9Sg8bXOPMGDrw7py9M1+yqS0dYeMV2Evx0zg2QKlG7RKtCYaSJNcaJugS3HLMzQa9CnQgx37Z6pvtzKGWYaA4Q2vlLuMqd5fwy7sm/Jclp621IpiMw9VtTOMwVcanme2kFMXDWXHXzqYZlK+72yceTsoU4C4t+ERYWOuOzIA0n4ts6We0xexHC4aFmhrEwifX1UgJ4tKajFCrJ0gigVUIS0j6Wtay+1sHS1OBXDLTWQqMStn6iIx9ZkCg6W9f/DozWY4AhRbxWFeHt5Lgoe1svpo9tgA0Ju5tvqnHdh+P80DqLoL+aUhaKsumOBB93pkbtaJuqUGSn/PSH4A1Rm9Rl+mBczrYJmNWb8Ioua5kQHrdy/nP2oTrkEP8ky6r0SvRIM9ggwKfv17It+w0FKKSmLZqf+ivIqYOcUiC9lVeJoa3rqmvPJwK6rSFLiSVOAyzKjsYnS6bhbkxUJ1K69XXvpqgJrZyWdbcShDORBBGbFiKC+Ge9vW4sh6F3hQOLuFP5mNnZnHgVkEI1HzS/qszfHpXJOIhJXb+8IOcsWo9W5mZFncOAEDtvl9rH2T7o8yDdITy2Q/AjmXj96Hz38qLbyLQ8SaqapVO0Hu7zq+krRckSxl2pMOJHHaAufgTDRayH9mLFHba2ZFiZf/H8r6luoaB2LO6fYSo4B40SmitC6Fyd6zSRoZ2tm4aD16pmj1u3KpHgRfLmBHRTDpjBSq6sfoNSEJsbTOMlR03urQ8Vic7Gnjps8GvUXSYWZ4OLWIFKYZ3zEbDAMRVvEENjW/wQKswuquBu8oAW70Gcn68MEbdck/hnD+d0oyYcoODSgE55zGcsa7qLMdtVaB7/oAs9Phcr0KSDHPxeqOMsCDFC9d0EVdTVOotBbyUzrV7aPI9BEKnuLLtlB5tO5B6SdqvyvLJPLwz0D21GKhHFJRUvDaZkjfBqNv1FiXc4IOEejnoVOaa4xWybdjLUtwT0vIAJMcdxfmu1lDNOqiBtTEQuEUgJNS6Ruxg2CGxgQk0Za6sPRN7Wpx7hYAR1QUx+YW06CM3wBTxk72ObqAsRXSERGBwRjrowuTzm/cvYP7lTlXymxtJTYHraYWPk9IzLZOMp7qGa2OFcCSNPRjOzyjttCUoIHUWmdM5ActU1V8vwrmvQlMQRUCsh+KqSy79FfNU8RE4xvr/VHqAeLJhJi2Eyd7Nr8XWu1r4hEhzfSsyXT/WoAZ89czt43YGMJGEdPRPQRpEKhd6FIUci5P+aSEj089ifO9UTDFtX5asaVvw1M90Ji2cTCHDqUBFKmGkBDY7Yghrfcm38UowAw4/egfa+JzlJIegdkSHPk9/Wyh0usdIEh75UPoZL8DbZd2sTQHYAvbkpwkFfGrBbBZxIPD6TCHrH1KGriO/YKAid5ciuhM+UhufFWPMxedmZ4s+fqamX1g+YjoCYt3+6pCZ+Jfy26/E1H4kDJfZ37HUp3Eg6+Qc0DfmXbIbmrrcfLIsyjRi4rIoJUONtwq/ES0AWL+VGa3Z02the0LGG3l6JLZkMBHIP9tn4fzQKLpHDwBgVmni9puoxA4GwNDjTmVYT4/mj2pvjTRQXzt+pdPhq4vPbtGehqs4v3J/fZnppEcxclt9e/Jn0CGT/6WP84Cm+zVtGwlHBATUpf926f3LLxX2XFcTNYcCtsttR8wz2C4dyO6YUaa6y0ZXTm7ICH29qQlFEDjBFfZ7fLqclUO4lkasA4cd0Qv1uZdQx3d76o9SfOMNLjl/Q63+B1d9t9d8F8LvtkrhBNXkdqNdDfLzzcy1wkCi+Jp6AFonE9ygGXQfBISBm/61b1/e08wFXg/rfkHdHHW+RjFoiwT8O0pA7FpzJ2BeINZ5BO9B6FRXy8P/a8FtGdMrGyPz/+FHI+VIK+h+/FWTYya9Ax/83u6z6S8KaXOKfx78mSgUQ+XYv/OUHbV5KThjRTdj+DXFi2x/vIfq3mEPy4IvMQW8pNl8ldYM4/i/94gCPkL+p9f+zdz06eTkS5b3FtgG2Rl2gkJNW1ePakIVgN3n7RScSjJzFEV56c6V9F0qOEc5/q0GOeSs7U4lAeDhtqcRIW2Di+M/OpBE4Tv9RXED7Hh8ATFA0Ka8BimL9eRCdSdmDorkQWSX8OVSDenAt9F9cU8ETKjCm3/p/JlHtevOeDoZ/TEQMnGiZYl0suNkdf63RY8nsxIpoFDhmPPxkL1x8/BVf1kk+8IX60aspdFUYtzQNgZcNYZtex6rObVmG2vD7jJO1HP3FdRmO4Xy3HcEMusVtSYT5SQ3Mj6OdYv2eooXTJfWqA+W/xGrGsljsiS4roNmrxggTx7XTf6Zd8uyYtB2J19fTQ+OmhimDATLQS5gyzIXbYX9JcgtBiMwOv2RJJT9hceDWTfRdiX+nG0CCoisa6EsJPXJfZK7QLt19l/R9lZOqIlaDnagGfBM0hEouyjWoUl6L1jdobcOV2wKZ5qzdI+QHHhnI4dWbSS9epeH9DwRu46RaYOhKKgZI6BxoAI3Nk78zd7lfU9I4idAKHJcPSlYluUwr0BbPzJlTRcNul1msexi2OCmu+fQ4BHzKaeJQ05x4UsMIcy8R9nsYgv53av38FHpL36J2r8v2/xJA30kXCcRKUG1Pb9/vo7qRwtabGzWgo3Ngorc/pyP6A9jNNA+2pawpnd5W2OTiZ/T3/KkCej3UeGzqJ115Yl3WKVO18LlEKeTYOIpF1JdeAVTykGmAjQAPX3cHKMuzQEJFauI0cV4b/O8EDeHTANiG2fOyBlVPc4zcNv4bJhPQZ4b+E+mH2fQKIgHtEHhL2HOwf1pG5yUGCZJhKZWDj6k/iW+th8PBpX8fShMzRD8x8YL2y6gZhZYKFN5pklKQ6FkBAOIFDFoDJNX96CSf4BqD5pne+y7JIOOJbXPy+oO8IDnaWuC9LL6CYAU1ebUiSdShbCc4TtAlFRhkevnROEyWutB8EFqFUUHHhURveKFmf8xKGU1en/WF1jMGgijhOoP5vQbqTpghlBxU7itxMxomp7Ptw9Tkq/eq1o+JhnEZHgqSWDfbXT2ljUpdR9lW9giFDThoJB5CKGx+U6+edodVSsafDMXoc02112zFub+6tPgoNtyZKT6AIUFVHvjzjsrAp40+iwUpLeUomz8uvvcx5E7vMWW+scUysUhIo7DlaDGQhww/8h7qjCF/M/xwFtfHCfMiIE4rGX8kHWkRo9z/iDEvOhcQGALRoBlUUsDDKoWFh7puYo/VqzQoz94eVxUQpBhHkQ7qbHxymS+agP7j6gOtb8ZAxumDJ1iB9Hc3qDAjbeE1VZaXjqdx3LoDftdGetZZcX2Jv1DoPPAyt9q3EEvci73plyMwJH4PmE9yLPNdYS/uBFjXfaLpX1teAaOZ/J2cl1AWdXR/W9OpwE2xM3M/DdQw+RpMgXdtqRWaghI6lTjzC53fhZ4JaesYlXD0m3HcOdGGhVLPhnxC7A38OKCG4PMvhGCAInLqYsX6MSi+C4S3wPEDcl6oZdtf5vugFHeTrZ20MPvXZjPH6idP76VpP98+aR/YqUQigylfEuu2xZZx1K+Rt1psyxhQPlM1ZKYZATRHPGtKFVSC9T1DHdV6MfR+m9GnFgeme/vT7djD2SKWol/S63Rn1xOSOZmwe3AjdN1u6NLALeoJfnGGztBMrzD6S3NK8LANKGZN7/sdJYSaF3rh4rEdTjDALub7NI0KIl2BFb/RptH3dehgMocPjRRsfepMeBBJ1XXmf9zlhNLK78LKSdMur01xgY4zNNIklaSVY+Ns4B/n1QawEHB6WluiEwsV7IcMouax00egakYdHxx7imBWAU7H4TKX/YBls/YoM++PJ7xbavls8WHj7zCMgmD96VxgX6ejMp7nJ0wStvjxjAswR6fZAXCU1f9/Z5KJMAHDEmyx5UcS7/HLdb7OZqt9GqJCZbw6ZXtHW6mCZsp0hmCxYIme5AZ+eiU1ZM03TfTW0Fp4GBXM7BLMlr4GP8AwmReiOqdS5mUsxuVxgZVFrzlTVaP07rwIrMsuajji/O/9IaYsOr0V98W+Xpi9n7J0HQsd0RTSyj029BsAPw/L6SDat8aHDxRkdMtqT9Cx9sD7TCuy951y9YLnNZwExibdfTpV8JNeYbM56o+okkDxTtfVQt85uvsULQHjGFJTmiuH7jzLfkGG/0isqWwaCH02GNi/Wy09ZOcChNp3/yy/w7WEo/BQGXiIPpMLi1eTFxHmelsBTJk8mkSQEfi2yKA31Y6XCEFAZoM1XoSl+PkR3gx5nSa7Tw4gVcvkaWjXmAnd7PC428x66eeGcAZ0ajHV0oVkGmsVIDK7YTM1mP66+XZgf4CE7kI6cGoXaWqGdFugwsnFlKlvzTGJJC6jBK6NOu62/LDukcArBTa5ZGSRMBrGtWRTilyxmXCZGaQiAVEfAkQLjvvOKwHjKSZgXTRL7dodqbwukFByfR3aWBDOBxwAZet5M8Kf+6L+NdiYhnhrWn8zYxJ1U3MF59AEN9K2kvBzc4z7wUnEAPMLiADg1F/VnI8nK+lZ1njrYOx9z0cOmn2gRqw1E67ItvQ2dDtVN6e0nEmi8vfMfGQ3mdCBMo5jcXDbT5rncN1LJpgMEY9CJlJYbXnZq/YF8tc5/ret8iMRKKa8ZEEmxuFKc/uMq7q2ARHq3L1uTjucv5assLQ78adXCvBSdQU+xmnxJ+VsmkE4bXBU+hCA/KD1jnRBEdsfox7gZigdcm2A3umU5WRIIa2b8Z+2JMPaDS2STiEEliez0bbWL8p8fNFspKVsbRpTD1Bm4QQD1R+xrhL0BN84xpdK2d9jnWOke84d2/0+i5JAVDVKbmBM6hKOOqOLPkzwr3cpF3aMXPgRlDcwYnTnPdhqMlvY7GPA41dKwVycQ7LchLhPj6IUMVTlzGCSTAKx1MSUdqeU8vCkNmiuIHv5vo55euVXoyEZR3U/AFsH6by/xFnCXn7NUSiblpjEH5vracySUeo+aNZDx2df7JuYYCAZx7HtXdLs1dELht+bLoke/zWf1xe95rRvYBUMS26x5nZk6Q1hwnnekl27eI+xdVmedBUqrBTPbaaf+Qu6MmqJVxBdq9RrkzkETJe0fPVPwtljnkmLHorkTaIuWHZ8jav97okGbvNQkn7LVEpMRuBPSGYwyvicd6zJpV836z/njaW4BRGujnZRAVHhB/hJhCYcLCqOkTwluWa5F43HixLtQqN8Xd3hyFD5m9fV/leDj3FFEmJtNamnQDJ1+cFjnmieZX+BcQwfNNi3uFG3eu2VudoAeMoo55B4walBvsDqxo0WBfANDsIPXpzMbzI/jax2dydHzjuwIQ7s62Cz9GbgNqyrSz6klkSGbhYPK/KPezcciqo7EWOr4GTn6KPjnv5i3pO39v2A5XIJd2inPUMOKj1PsADnhKzblsJG2RUEG7Z8Vdhh8nT0nPKRWMD5b3/9aSBF1wmeIV4Gm0nM9BrUfB6TNmurrVMYtYxrYDtnleF5Vt8tWfrVKXOYp1knSMPjBvwl3sx7NUBrE/CNhiTMoQ3/PpBMMZY2LE/OUePZZFQCxu44vtyAKDTxi2gBNmLXfy0ppVZbD8fV5KwTscgFgDGe49Me0q6s+06DPgGNzro81Jh4plslO6/SGRAwrMdDW4lguPKM55bRaVsfkDFIx2Gpt1RSMYTn52WJpjZuqWsFHeWsSk27ZLmJUNHmAHcv4/kxoBXp1a+NEc3dorqgp6c9hHmQuzWEg8T1V2kvbx/jL7I22KhA/McARxwcVZ0J03FkSFMqDR6oyubQqdYbuAnNZtU94JY5ouFdnWnHAIg1k97xZmmEx3ozWKXKwmElBgm5lGRL1KMrnB6Yf6aLXv5fZs1xyD9WxlN0BBC8tGzJAxHhCNxXV39b5DoBYb2EwnP/q7dbBubHVgrKPq74V8/zKDOh0SOb34uVx1rShZAAJd7gGoHiDD9UIe/gSqFiiOkjRBrcXDFIzeJ7DuPjr4iVoRqUbS2yq7o8kJ0FgvEdFxVgTKof1F/+XGbaI4pzj5El6bmzy97Pif0KOEggzytc3tMUDh0GYuuIejL6C25Mft8vnoqQvmD1GUVaFyhTnP0UARWzGeexWY79/D9TktKErm9Z+O4DcAA0SGX3BRdJzUtkfX29PweRaEwX0IxdDCMiXgrxklCCTM/3YmKBEUyE07bDhr+06LZo5m7OAkpIB9NcI5B61DCZLjJmy1TDiieaRo3fJUap4ip7VscCrNE+HpzZERZ0quBW4cbSMAvZbkltaRAr9cnKHKLFTwkqChP0Hw/EIK3hm1Rw55A70g98PkZCS2gbDxTidWkR8kes23tGNJE5A9F9KShkqqX4RNfEHNuloMfKVctkkJW045HG/6T6P6L8ARBcfSFhIydLUcK5wHj6Hifbp1GssAQ5TKAUxNKWx853HzCVlNrpaNzB3ktIyOzEhbdlJjGS56R3k5BM79EZLQywBR5FjlCbIpebkw+P5O4I3wJkWb2DvHdCNcU2KfqOtKYy/F2kFr/OBGD1k092nEcupLQzyW3i2ELRnY1c+UigtZFD9WpSJmly1oMFaPB+mdRfls3efRL9FqG+SpdHeHaXjNH3UTQByECxzROVJPxX354/OSmRdN10/eClemvIM2o9v4zkmQIAg7FtmdGEvjFHEuSPsiNeYonzw3PY4iBposTkxEWL8vsd18d3RVU+9WURMKh9gtEpNuL15eNtXjlKheqO76P5/wBUGR66b0CgGkbUmRhAM7InWQyo980EhqMIILa8M/rIeTYmMoMHth2hRGw9yGtxSzY+972ExugQBbhPlL1Z75AEq5WLPd0W31V5b0ve9QgtOGW0H0uBy9uA9cxzcmgLEntZn04IE1EfvtpGTEiobQyxz4qWcJk8YizTayQjCgQHln6ggqw7Ec7oqTUYt6FevxZkb1CQ8Rdxxz/gp5PuPDAjp7xquQldEXYUKJmykUQNAOItNZ//IP8WVzQ3dVbivkO5zzr2d13yw19E1Upygh+1hCSIf53UFc2tl+GDkRaJgueCS5OXlP8uRs8UFbw/k3euKjUlTDqkuh3Fvwr4l2HiZ9lzvNX3vtOwf6qMGLj0lkIQSg/4bIjBoBBWEDgdVgXZ4V0kyyt5BPlvKLP4CuMYvlfvGlIf6ETpJ+caKipbJh9EeCIDTaHeHf4xHH3wu3e9zsdVfGMsuTuiCbBMwRL9sIwAAA=";

const MARYSIA_DEFAULT_ENTITIES = {
  power: "switch.marysia_power",
  selected_program: "select.marysia_selected_program",
  active_program: "select.marysia_active_program",
  stop: "button.marysia_stop_program",
  door: "sensor.marysia_door",
  operation_state: "sensor.marysia_operation_state",
  progress: "sensor.marysia_program_progress",
  finish_time: "sensor.marysia_program_finish_time",
  remote_control: "binary_sensor.marysia_remote_con…4331 tokens truncated…:0; }
  }
  @container marysia (max-width:460px) {
    .brand-head { display:block; }
    .online { margin-top:7px; }
    .program { width:126px; font-size:10px; }
    .program.p0,.program.p4 { width:142px; }
    .knob { width:120px; }
    .pointer { transform-origin:2px 55px; }
    .knob-core { inset:25px; }
    .dial-area { height:178px; }
    .features,.primary-actions { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .stats { gap:6px; }
    .stat { padding:7px; }
    .delay-action { grid-column:1 / -1; }
    .footer { margin-top:8px; }
  }
  @media (prefers-reduced-motion:reduce) {
    .pointer,.progress-fill,.door { transition:none; }
    .dishwasher[data-state="run"] .water i { animation:none; height:54px; opacity:.9; }
  }
  /* Layout based on the approved Bosch card reference. */
  ha-card { border:1px solid #344b5c; border-radius:20px; background:radial-gradient(ellipse at 48% 12%,#1c2b38 0,#111b25 57%,#0d151d 100%); }
  .stage { display:grid; grid-template-columns:minmax(280px,.9fr) minmax(270px,.8fr) minmax(460px,1.38fr); grid-template-rows:minmax(320px,auto) auto auto; gap:18px 22px; padding:20px 24px 18px; }
  .left-column { grid-column:1; grid-row:1 / span 2; min-width:0; display:flex; flex-direction:column; }
  .identity { padding:8px 8px 10px; }
  .brand-head { justify-content:flex-start; gap:15px; }
  .logo { display:flex; align-items:center; gap:10px; font-size:18px; letter-spacing:.02em; }
  .logo-mark { width:34px; height:34px; display:grid; place-items:center; border:2px solid #b8c4cf; border-radius:50%; color:#e8edf2; font-size:18px; font-weight:600; box-shadow:inset 0 0 0 2px #657786; }
  .logo strong { font-size:21px; letter-spacing:0; font-weight:700; }
  .logo b { color:#ee2434; font-weight:700; }
  .logo span:last-child { color:#9bacbd; font-size:14px; letter-spacing:.03em; }
  .device-line { display:flex; align-items:center; gap:18px; margin-top:14px; }
  .device-name { margin:0; font-size:28px; line-height:1.1; }
  .model { margin-top:5px; color:#9caec0; font-size:14px; }
  .brand-online { display:flex; align-items:center; gap:9px; color:#32e595; font-size:14px; white-space:nowrap; }
  .brand-online .online-dot { width:14px; height:14px; }
  .photo-wrap { flex:1; min-height:0; display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .photo-wrap { position:relative; }
  .machine-photo { display:block; width:min(100%,450px); max-height:540px; object-fit:contain; }
  .water-overlay { position:absolute; inset:11% 12% 39%; display:none; pointer-events:none; }
  .water-overlay.active { display:block; }
  .water-overlay i { position:absolute; top:4%; width:3px; height:20px; border-radius:4px; background:linear-gradient(#d9fbff,#42d9ff 60%,#bbf7ff); box-shadow:0 0 8px #33d3ff,0 0 15px #33d3ff99; animation:photo-spray .68s linear infinite; }
  .water-overlay i::after { content:""; position:absolute; left:-2px; bottom:-5px; width:7px; height:7px; border-radius:50%; background:#bcf5ff; box-shadow:0 0 8px #4cdcff; }
  .water-overlay i:nth-child(1) { left:21%; animation-delay:-.21s; }
  .water-overlay i:nth-child(2) { left:34%; animation-delay:-.5s; }
  .water-overlay i:nth-child(3) { left:47%; animation-delay:-.08s; }
  .water-overlay i:nth-child(4) { left:61%; animation-delay:-.37s; }
  .water-overlay i:nth-child(5) { left:74%; animation-delay:-.61s; }
  @keyframes photo-spray { 0% { transform:translateY(-4px); opacity:0; } 14% { opacity:1; } 82% { opacity:.9; } 100% { transform:translateY(74px); opacity:0; } }
  .brand-online.offline { color:#ff7b83; }
  .dial-column { grid-column:2; grid-row:1; align-self:center; min-width:0; }
  .dial-area { width:min(100%,390px); height:320px; }
  .knob { width:190px; background:radial-gradient(circle at 34% 28%,#e5e9eb 0,#aab4ba 23%,#59646c 48%,#252d34 64%,#b8c2c8 69%,#515b63 75%,#232a30 100%); box-shadow:0 7px 20px #0009,inset 0 2px 9px #ffffffad,inset 0 -7px 14px #000b; }
  .knob::before { inset:10px; border-color:#ffffff77; }
  .pointer { top:12px; height:29px; width:5px; background:#16c8ef; box-shadow:0 0 13px #0bbbe9; transform-origin:2px 83px; }
  .knob-core { display:none; }
  .program { width:142px; grid-template-columns:10px 1fr; gap:7px; color:#d5e0eb; font-size:13px; line-height:1.25; }
  .program.p0 { top:0; }
  .program.p0 { display:flex; flex-direction:column-reverse; justify-content:center; align-items:center; gap:7px; width:170px; height:50px; text-align:center; }
  .program.p1 { top:53px; left:-8px; right:auto; }
  .program.p2 { top:53px; right:-8px; }
  .program.p3 { top:140px; left:-17px; right:auto; }
  .program.p4 { top:140px; right:-12px; bottom:auto; }
  .program.p5 { bottom:20px; left:-7px; right:auto; }
  .program.p6 { bottom:20px; right:-3px; left:auto; top:auto; }
  .program[aria-pressed="true"] { color:#dffaff; font-weight:600; }
  .led { width:9px; height:9px; background:#66737e; }
  .program[aria-pressed="true"] .led { width:13px; height:13px; background:#45dbf5; box-shadow:0 0 12px #45dbf5,0 0 23px #45dbf588; }
  .dial-hint { display:none; }
  .state-panel { grid-column:3; grid-row:1; align-self:center; min-width:0; padding:20px 20px 0; border:1px solid #2b3d4c; border-radius:18px; background:linear-gradient(145deg,#17232e,#111a23); box-shadow:0 12px 28px #0003,inset 0 1px #ffffff08; }
  .state-head { display:flex; align-items:center; gap:24px; min-height:112px; padding:0 14px; }
  .state-check { width:98px; height:98px; display:grid; place-items:center; border:3px solid #10d8b5; border-radius:50%; color:#1ce8b7; font-size:51px; line-height:1; text-shadow:0 0 12px #0ff8bd; box-shadow:0 0 12px #00eac477,inset 0 0 12px #00eac444; }
  .state-title { color:#edf3fa; font-size:34px; font-weight:650; }
  .progress-row { margin:15px 0 18px; gap:13px; }
  .progress-track { height:16px; background:#26333f; }
  .progress-fill { background:linear-gradient(90deg,#08b5ed,#08d0ef); box-shadow:0 0 10px #08b5ed88; }
  .percent { min-width:50px; font-size:15px; }
  .stats { grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; }
  .stat { min-height:106px; display:block; padding:14px 15px; border:1px solid #293947; border-radius:14px; background:linear-gradient(145deg,#192530,#131c25); }
  .stat-icon { width:auto; display:block; margin-bottom:8px; color:#08bbee; font-size:22px; text-align:left; }
  .stat small { font-size:13px; }
  .stat strong { margin-top:3px; font-size:17px; }
  .control-panel { grid-column:2 / span 2; grid-row:2; min-width:0; }
  .primary-actions { grid-template-columns:1fr 1fr .95fr; gap:12px; margin:0; }
  .power-action,.action.start,.action.stop { min-height:82px; border:1px solid #235168; border-radius:14px; }
  .power-action { padding:13px 20px; }
  .power-action .power-icon { font-size:34px; }
  .power-action strong,.action.start strong,.action.stop strong { font-size:17px; }
  .power-action .switch { width:68px; height:42px; flex-basis:68px; border-radius:24px; }
  .power-action .switch::after { top:5px; left:5px; width:30px; height:30px; }
  .power-action.is-on .switch::after { transform:translateX(25px); background:#03caef; box-shadow:0 0 13px #03caef; }
  .action.start { background:linear-gradient(120deg,#06b8df,#0294c1); box-shadow:0 0 18px #00c4ef55,inset 0 1px #a9f4ff75; font-size:22px; }
  .action.start span { font-size:36px; }
  .action.stop { background:linear-gradient(140deg,#202c37,#151e27); font-size:17px; }
  .action.stop span { color:#99a7b8; font-size:24px; }
  .delay-action { min-height:0; justify-content:flex-start; padding:0; border:0; border-radius:0; background:transparent; }
  .features { grid-template-columns:repeat(6,minmax(0,1fr)); gap:10px; margin-top:12px; }
  .feature { min-height:123px; grid-template-columns:1fr; grid-template-rows:1fr auto auto; justify-items:center; gap:0; padding:13px 9px 10px; text-align:center; }
  .feature-icon { grid-row:auto; font-size:25px; }
  .feature-label { align-self:center; min-height:38px; font-size:14px; line-height:1.22; }
  .feature .switch { grid-column:auto; justify-self:center; margin-top:5px; }
  .feature[data-feature="start_in_relative"] { cursor:default; }
  .feature[data-feature="start_in_relative"] .delay-controls { grid-column:1; margin-top:5px; }
  .feature[data-feature="start_in_relative"] .delay-controls button { width:23px; height:22px; }
  .feature[data-feature="start_in_relative"] .delay-controls strong { min-width:38px; font-size:11px; }
  .footer { grid-column:1 / -1; grid-row:3; margin:0; padding:0 18px; border:1px solid #293a49; border-radius:15px; background:linear-gradient(120deg,#17232d,#111a23); }
  .foot-item { min-height:78px; gap:14px; padding:9px 20px; }
  .foot-icon { width:42px; height:42px; display:grid; place-items:center; border-radius:50%; background:#1d3448; color:#08b9e9; font-size:23px; }
  .foot-item small { font-size:14px; }
  .foot-item strong { font-size:15px; }
  @container marysia (max-width:1100px) {
    .stage { grid-template-columns:minmax(250px,.9fr) minmax(0,1.25fr); grid-template-rows:auto auto auto auto; gap:16px; padding:16px; }
    .left-column { grid-column:1; grid-row:1 / span 2; }
    .dial-column { grid-column:2; grid-row:1; }
    .state-panel { grid-column:2; grid-row:2; }
    .control-panel { grid-column:1 / -1; grid-row:3; }
    .footer { grid-row:4; }
    .dial-area { height:280px; }
    .state-check { width:75px; height:75px; font-size:39px; }
    .state-title { font-size:27px; }
    .features { grid-template-columns:repeat(3,minmax(0,1fr)); }
  }
  @container marysia (max-width:700px) {
    .stage { grid-template-columns:minmax(0,1fr); padding:12px; gap:12px; }
    .left-column,.dial-column,.state-panel,.control-panel,.footer { grid-column:1; grid-row:auto; }
    .left-column { min-height:480px; }
    .identity { padding:3px 3px 10px; }
    .logo span:last-child { font-size:11px; }
    .device-name { font-size:24px; }
    .machine-photo { max-height:400px; width:min(100%,340px); }
    .dial-area { width:min(100%,390px); height:265px; }
    .knob { width:155px; }
    .pointer { transform-origin:2px 68px; }
    .program { width:125px; font-size:11px; }
    .program.p0,.program.p4 { width:140px; }
    .state-panel { padding:12px 12px 0; }
    .state-head { min-height:78px; gap:14px; }
    .state-check { width:65px; height:65px; font-size:34px; }
    .state-title { font-size:25px; }
    .stat { min-height:90px; padding:10px; }
    .stat strong { font-size:14px; }
    .primary-actions { gap:7px; }
    .power-action { gap:6px; padding:8px; }
    .power-action .switch { width:44px; height:28px; flex-basis:44px; }
    .power-action .switch::after { width:18px; height:18px; top:4px; left:4px; }
    .power-action.is-on .switch::after { transform:translateX(16px); }
    .power-action strong,.action.start strong,.action.stop strong { font-size:13px; }
    .action.start span { font-size:26px; }
    .features { grid-template-columns:repeat(3,minmax(0,1fr)); gap:7px; }
    .feature { min-height:105px; padding:9px 5px; }
    .feature-label { font-size:12px; }
    .footer { grid-template-columns:1fr; padding:5px 12px; }
    .foot-item { min-height:55px; border:0; padding:4px; }
    .foot-icon { width:34px; height:34px; font-size:19px; }
  }
`;

function marysiaNormalize(value) {
  return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

class MarysiaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._selectedKey = MARYSIA_PROGRAMS[0].key;
    this._error = "";
    this._busy = false;
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Marysia: configuration must be an object");
    this._config = config;
    this._entities = { ...MARYSIA_DEFAULT_ENTITIES, ...(config.entities || {}) };
    this._programs = Array.isArray(config.programs) && config.programs.length
      ? config.programs.map((program) => ({
        key: program.option || program.key || program.label,
        label: program.label || program.option || program.key,
        aliases: [program.option, program.key, program.label].filter(Boolean),
      }))
      : MARYSIA_PROGRAMS;
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    const selected = this._entity("selected_program");
    const selectedKey = this._matchProgram(selected?.state);
    if (selectedKey) this._selectedKey = selectedKey;
    this._render();
  }

  getCardSize() { return 8; }

  getGridOptions() { return { columns: "full", rows: "auto" }; }

  static getStubConfig() {
    return { name: "Marysia", model: "SMS4ENI06E" };
  }

  _entity(key) {
    const entityId = this._entities?.[key];
    if (!entityId || typeof entityId !== "string") return null;
    return this._hass?.states?.[entityId] || null;
  }

  _state(key) { return String(this._entity(key)?.state ?? "").toLowerCase(); }

  _matchProgram(value) {
    const normalized = marysiaNormalize(value);
    if (!normalized) return null;
    return this._programs?.find((program) =>
      [program.key, program.label, ...(program.aliases || [])].some((alias) => marysiaNormalize(alias) === normalized)
    )?.key || null;
  }

  _programFor(key) { return this._programs?.find((program) => program.key === key) || this._programs?.[0]; }

  _entityOption(entityKey, program) {
    const entity = this._entity(entityKey);
    const options = entity?.attributes?.options;
    if (!Array.isArray(options)) return null;
    const aliases = [program?.key, program?.label, ...(program?.aliases || [])]
      .map(marysiaNormalize).filter(Boolean);
    return options.find((option) => aliases.includes(marysiaNormalize(option))) || null;
  }

  _prettyState(key, state) {
    const maps = {
      operation_state: {
        inactive: "Nieaktywna", ready: "Gotowa", delayedstart: "Opóźniony start", run: "Zmywa",
        pause: "Wstrzymana", actionrequired: "Wymaga działania", finished: "Zakończona",
        error: "Błąd", aborting: "Zatrzymywanie",
      },
      door: { closed: "Zamknięte", locked: "Zablokowane", open: "Otwarte" },
    };
    if (maps[key]?.[state]) return maps[key][state];
    if (state === "on") return "Włączone";
    if (state === "off") return "Wyłączone";
    if (!state || state === "unknown" || state === "unavailable") return "—";
    return String(this._entity(key)?.state ?? "—");
  }

  _remainingTime() {
    const entity = this._entity("finish_time");
    if (!entity || ["unknown", "unavailable", ""].includes(String(entity.state).toLowerCase())) return "—";
    const raw = String(entity.state);
    const end = Date.parse(raw);
    if (Number.isFinite(end)) {
      const minutes = Math.max(0, Math.round((end - Date.now()) / 60000));
      return `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")} min`;
    }
    const numeric = Number(raw);
    const unit = entity.attributes?.unit_of_measurement || "";
    if (Number.isFinite(numeric)) return unit ? `${numeric} ${unit}` : raw;
    return raw;
  }

  _delayText() {
    const entity = this._entity("start_in_relative");
    if (!entity || ["unknown", "unavailable", ""].includes(String(entity.state).toLowerCase())) return "—";
    const value = Number(entity.state);
    if (!Number.isFinite(value)) return "—";
    return `${value} ${entity.attributes?.unit_of_measurement || "s"}`;
  }

  _adjustDelay(direction) {
    if (!this._isAvailable("start_in_relative")) return;
    const entity = this._entity("start_in_relative");
    const current = Number(entity.state);
    const step = Number(entity.attributes?.step) || 1;
    const minimum = Number(entity.attributes?.min ?? 0);
    const maximum = Number(entity.attributes?.max ?? 86400);
    if (!Number.isFinite(current)) return;
    const value = Math.max(minimum, Math.min(maximum, current + direction * step));
    this._call("number", "set_value", { entity_id: this._entities.start_in_relative, value });
  }

  _isAvailable(key) {
    const entity = this._entity(key);
    return Boolean(entity && !["unknown", "unavailable"].includes(String(entity.state).toLowerCase()));
  }

  _dishwasherState() {
    const door = this._state("door");
    const operation = this._state("operation_state");
    if (door === "open") return "open";
    if (operation === "run") return "run";
    return "ready";
  }

  _canStart() {
    return this._state("power") === "on"
      && this._state("door") === "closed"
      && this._state("remote_control") === "on"
      && this._state("remote_start") === "on"
      && this._state("operation_state") === "ready"
      && this._isAvailable("active_program")
      && Boolean(this._entityOption("active_program", this._programFor(this._selectedKey)));
  }

  _canStop() {
    return this._isAvailable("stop") && ["run", "pause", "delayedstart", "actionrequired"].includes(this._state("operation_state"));
  }

  async _call(domain, service, data) {
    if (!this._hass) return;
    this._busy = true;
    this._error = "";
    this._render();
    try {
      await this._hass.callService(domain, service, data);
    } catch (error) {
      this._error = error?.message || "Nie udało się wykonać polecenia.";
    } finally {
      this._busy = false;
      this._render();
    }
  }

  async _selectProgram(program) {
    this._selectedKey = program.key;
    this._error = "";
    this._render();
    const option = this._entityOption("selected_program", program);
    if (!option) {
      this._error = `Program „${program.label}” nie występuje na liście wybranych programów zmywarki.`;
      this._render();
      return;
    }
    await this._call("select", "select_option", { entity_id: this._entities.selected_program, option });
  }

  async _start() {
    if (!this._canStart()) return;
    const program = this._programFor(this._selectedKey);
    const option = this._entityOption("active_program", program);
    if (!option) {
      this._error = "Wybrany program nie jest dostępny do uruchomienia.";
      this._render();
      return;
    }
    await this._call("select", "select_option", { entity_id: this._entities.active_program, option });
  }

  _render() {
    if (!this._config || !this.shadowRoot) return;
    const program = this._programFor(this._selectedKey) || this._programs[0];
    const operation = this._state("operation_state");
    const door = this._state("door");
    const progressRaw = Number(this._entity("progress")?.state);
    const progress = Number.isFinite(progressRaw) && progressRaw >= 0 ? Math.min(100, progressRaw) : null;
    const powerOn = this._state("power") === "on";
    const remoteControl = this._state("remote_control");
    const remoteStart = this._state("remote_start");
    const connected = this._state("connectivity") === "on";
    const stateText = this._prettyState("operation_state", operation);
    const doorText = this._prettyState("door", door);
    const iconState = this._dishwasherState();
    const statusClass = operation === "run" ? "washing" : ["error", "actionrequired", "aborting"].includes(operation) ? "problem" : "";
    const statusLine = door === "open" ? "Drzwi otwarte · zmywarka zatrzymana" : stateText;
    const progressText = progress === null ? "—%" : `${Math.round(progress)}%`;
    const available = (key) => this._isAvailable(key) ? this._prettyState(key, this._state(key)) : "—";
    const featureTiles = [
      ["child_lock", "Blokada dziecięca", "♙"],
      ["half_load", "Połowa załadunku", "½"],
      ["hygiene", "Hygiene+", "✣"],
      ["vario_speed", "VarioSpeed+", "⌁"],
      ["door_ajar", "Uchylanie drzwi", "↗"],
    ].map(([key, label, icon]) => {
      const enabled = this._state(key) === "on";
      const isAvailable = this._isAvailable(key);
      return `<button class="feature ${enabled ? "is-on" : ""}" type="button" data-feature="${key}" aria-pressed="${enabled}" ${isAvailable ? "" : "disabled title=\"Brak dostępnej encji Home Connect\""}>
        <span class="feature-icon" aria-hidden="true">${icon}</span><span class="feature-label">${this._escape(label)}</span><span class="switch" aria-hidden="true"></span>
      </button>`;
    }).join("");
    const delayAvailable = this._isAvailable("start_in_relative");
    const delayEntity = this._entity("start_in_relative");
    const delayValue = Number(delayEntity?.state);
    const delayMin = Number(delayEntity?.attributes?.min ?? 0);
    const delayMax = Number(delayEntity?.attributes?.max ?? 86400);
    const delayTile = `<div class="feature delay-tile"><span class="feature-icon" aria-hidden="true">◷</span><span class="feature-label">Opóźniony start</span><div class="delay-controls"><button type="button" data-delay="-1" aria-label="Zmniejsz opóźnienie" ${!delayAvailable || !Number.isFinite(delayValue) || delayValue <= delayMin || this._busy ? "disabled" : ""}>−</button><strong>${this._escape(this._delayText())}</strong><button type="button" data-delay="1" aria-label="Zwiększ opóźnienie" ${!delayAvailable || !Number.isFinite(delayValue) || delayValue >= delayMax || this._busy ? "disabled" : ""}>+</button></div></div>`;
    const programButtons = this._programs.map((item, index) => `
      <button class="program p${index % 7}" type="button" data-program="${index}" aria-pressed="${item.key === this._selectedKey}" ${this._entityOption("selected_program", item) ? "" : "disabled"}>
        <span class="led" aria-hidden="true"></span><span>${this._escape(item.label)}</span>
      </button>`).join("");

    this.shadowRoot.innerHTML = `
      <style>${MARYSIA_STYLES}</style>
      <ha-card>
        <div class="stage">
          <section class="left-column" aria-label="Zmywarka Bosch">
            <div class="identity">
              <div class="brand-head"><div class="logo"><span class="logo-mark" aria-hidden="true">H</span><strong><b>B</b>OSCH</strong><span>• HOME CONNECT</span></div></div>
              <div class="device-line"><div class="device-name">${this._escape(this._config.name || "Marysia")}</div><div class="brand-online ${connected ? "" : "offline"}"><span class="online-dot"></span>${connected ? "online" : "offline"}</div></div>
              <div class="model">${this._escape(this._config.model || "SMS4ENI06E")}</div>
            </div>
            <div class="photo-wrap">
              <img class="machine-photo" src="${this._escape(this._config.image || MARYSIA_PHOTO)}" alt="Otwarta zmywarka Bosch z talerzami">
              <span class="water-overlay ${iconState === "run" ? "active" : ""}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
            </div>
          </section>
          <section class="dial-column" aria-label="Wybór programu">
            <div class="dial-area">
              <div class="program-list" aria-label="Programy zmywarki">${programButtons}</div>
              <div class="knob-zone"><button class="knob" id="knob" type="button" aria-label="Wybierz następny program"><span class="pointer" style="transform:rotate(${Math.max(0,this._programs.findIndex((item) => item.key === this._selectedKey)) * (360 / this._programs.length)}deg)"></span><span class="knob-core"><span>${this._escape(program?.label || "—")}</span></span></button></div>
              <div class="dial-hint">kliknij gałkę lub nazwę programu</div>
            </div>
          </section>
          <section class="state-panel" aria-label="Stan zmywarki">
            <div class="state-head"><div class="state-check" aria-hidden="true">${operation === "run" ? "↻" : "✓"}</div><div class="state-title">${this._escape(stateText)}</div></div>
            <div class="progress-row"><div class="progress-track" role="progressbar" aria-label="Postęp programu" aria-valuenow="${progress ?? 0}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${progress ?? 0}%"></div></div><div class="percent">${progressText}</div></div>
            <div class="stats">
              ${this._stat("▤", "Program", program?.label || "—")}
              ${this._stat("▣", "Drzwi", doorText)}
              ${this._stat("◷", "Pozostały czas", this._remainingTime())}
            </div>
          </section>
          <section class="control-panel" aria-label="Sterowanie zmywarką">
            <div class="primary-actions">
              <button class="action power-action ${powerOn ? "is-on" : ""}" id="power" type="button" aria-pressed="${powerOn}" ${!this._isAvailable("power") || this._busy ? "disabled" : ""}><span class="power-icon" aria-hidden="true">⏻</span><strong>Zasilanie</strong><span class="switch" aria-hidden="true"></span></button>
              <button class="action start" id="start" type="button" ${!this._canStart() || this._busy ? "disabled" : ""}><span aria-hidden="true">▶</span><strong>Start</strong></button>
              <button class="action stop" id="stop" type="button" ${!this._canStop() || this._busy ? "disabled" : ""}><span aria-hidden="true">■</span><strong>Stop</strong></button>
            </div>
            <div class="features" aria-label="Opcje zmywarki">${featureTiles}${delayTile}</div>
            <div class="error" role="alert">${this._escape(this._error)}</div>
          </section>
          <footer class="footer">
            ${this._foot("◌", "Home Connect", connected ? "Online" : "Offline")}
            ${this._foot("▯", "Zdalne sterowanie", available("remote_control"))}
            ${this._foot("▶", "Zdalny start", available("remote_start"))}
          </footer>
        </div>
      </ha-card>`;

    this.shadowRoot.querySelectorAll(".program").forEach((button) => button.addEventListener("click", () => {
      const item = this._programs[Number(button.dataset.program)];
      if (item) this._selectProgram(item);
    }));
    this.shadowRoot.querySelector("#knob")?.addEventListener("click", () => {
      const current = Math.max(0, this._programs.findIndex((item) => item.key === this._selectedKey));
      const next = this._programs[(current + 1) % this._programs.length];
      if (next) this._selectProgram(next);
    });
    this.shadowRoot.querySelector("#start")?.addEventListener("click", () => this._start());
    this.shadowRoot.querySelector("#stop")?.addEventListener("click", () => {
      if (this._entities.stop) this._call("button", "press", { entity_id: this._entities.stop });
    });
    this.shadowRoot.querySelector("#power")?.addEventListener("click", () => {
      if (this._entities.power) this._call("switch", "toggle", { entity_id: this._entities.power });
    });
    this.shadowRoot.querySelectorAll("[data-feature]").forEach((button) => button.addEventListener("click", () => {
      const key = button.dataset.feature;
      if (key && this._isAvailable(key)) this._call("switch", "toggle", { entity_id: this._entities[key] });
    }));
    this.shadowRoot.querySelectorAll("[data-delay]").forEach((button) => button.addEventListener("click", () => {
      this._adjustDelay(Number(button.dataset.delay));
    }));
  }

  _stat(icon, label, value) {
    return `<div class="stat"><span class="stat-icon" aria-hidden="true">${icon}</span><div><small>${this._escape(label)}</small><strong>${this._escape(value)}</strong></div></div>`;
  }

  _foot(icon, label, value) {
    return `<div class="foot-item"><span class="foot-icon" aria-hidden="true">${icon}</span><div><small>${this._escape(label)}</small><strong>${this._escape(value)}</strong></div></div>`;
  }

  _escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }
}

if (!customElements.get("marysia-card")) customElements.define("marysia-card", MarysiaCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "marysia-card")) {
  window.customCards.push({
    type: "marysia-card",
    name: "Marysia — zmywarka Bosch",
    description: "Home Connect: programy, status i sterowanie zmywarką Bosch.",
    preview: true,
  });
}

