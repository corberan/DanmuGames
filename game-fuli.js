ScriptManager.clearTimer();
ScriptManager.clearEl();
ScriptManager.clearTrigger();

var face_data = "7Z13fFXVtu-Te28QIJRA6BB6hwQICb2E3nvvRZQqAiIogkpRQCkqIlgR7Ag2wIZdz9Gjp-d7bnnvnnfv6+Ot7whj30WAhHdDxDL-GJ+9s-faa68N6zt-o805JSgoSH7KFh0bLEEhQWohYUGB5w0b15Yx44pl7vypMm3GOH0+ZGgf6T+wQAYM6qXPh43oL7375uvz8ROHy4xZEwLHclyPgk7SNa+tWrf8dmp53dsHLL9HBxk1ZrAMHzkgcO7C3t2ke8+O+pnOXVvLoCFF+h7HjB0-VCZNGaXfM2feFJm3YJr+PWLUQOnTr7t+rldRVxk6vJ8es-SmuTJ95nhZsGiGrF23XLZu2yi77r9bdj+wTXbu3ir37tgiq9cuk1tWLpLFS2frOWfOnqifnTVnkv49cvQgvY52HZpLvwE99fs4Z9-+PaRWnSp6nVwX18L38u-G60V98uSmm+fLlGlj1CZPHa2fxSZOHikTJo1QGz6mq4wclydjJhbIhCl9ZcqMwTJj9kiZPW+c928-xfvsOJk6baIkJSV5-1-BkpJcxXuMvGhR8lO-fx2-ZfPL-cy9ByNwCycYzwcX95aBgwv1voa7nr06K0NwW1DYRVnq1KWVdOnWRlnlb47lc7DPOeHfPgvfHTu3lDbtmkqLVg2leYv6ktuygbRs3Uhf4z2O4Vj44DrGTRim54Inzs8j1w1PK1YtlqnTx8rsuZNl0ZJZsvyWBcoUz+GT97gGGGUc4XMwxev8bj7HtTF2cG5Y5dr5Dp7zb2Dn4d+hSbO6kpAUIYnJkdK0eT09jnHNWIVb-i2NaT43dlJPGTe5QMZPKZKJU-vJ5OmDZOqMYTJt5khvnBjn+HVWIX6533jkvoUZ2DR+uD+XLZ+n9zAMwBP3O5rJfQsDxjHHwyr8orPc7xxnnHLvN2hUS+rmVFf9qlEzTapnper1xcaHKhcpaTGSUTVBqtVIkaxa6VKzdkaAW-Qctvl+mOSauDa0lOvgb57DEO+b1nMd5kvwOqwWD+sbGJfgjt+MMTYxlvDc-k1sTOO3cU7zExhXeLSxgeecC27Rb66H8WH6nAEybXZ-mTprgMfuAI-hATJ+0kAZN3GQ95lix6+zCvHLvcf9zP0JI+gp-iSscD9zDO-DApqERvI+9zivwQCf5W9eb922ibKa0yBLsutVk6rVkqRKZqKkV4mX1PRYSUqJkvjEcGU2Ji4kcD3+awyPDJLI6CCJiglS5jkX3POIXnNtcAU7o8cOUeM6MZ7zOrwapzDHeIMe4t-yPiwyTsEafHJuvovjOYbPMm4QX8AlYxG-lfNynoWLZ+r4gU-N+fle+w7GEz43f+F0mbtoqMxeMERmzB3s+c4DPR+6v4wZ309Gjunrfa6-49dZhfjlvuT+hYm27Zup-rRq01ifd+jUQn1jOIZV0+f2HXOlcdNs5dO0lfsfzYRTtBT24BBGuQb+jogqeS00vORasODQkkdeC4soOYZj+QzGa2a8npwardoNa81yc6RRkzrqy3LdjD34A-wmxiV4YsyBVXQR3latWao+NvqIVnMcv4nz4SvAITqO9jKeod32b0SMwBjF65yTz5anv45fZ5XJL0xyX5K-gQdehwmecz-DMO+jPdzL+LNoMLyiq8YffMGmsYe+xiWEKY-GrZmfSWJJv6HPfiutz3wf5zOf216Hf3SdMQSNhjH8AotpiZdv27BCNm1eKytXL1FGYY-fz1gFwzDJb0XbYZ9Hxi5+O743-15oLcehzei35ayuZs5-dlaZ-HK-oluwigahqfiq9RvWVI7r1a+hVqduZkBf4RL2SrMFm3AFd2kZcRrLmo6iw5hxbUbMa4a2YsYuPHNOGwPwqTH-eFD6Gnifa+Q3oMuwyZiDT7vm1pvUyDvDJuMQHOIz41NwPH4G76G56Of6jSv1s8YsYwHc8z7MMy5YXhvtRYPRcHjH13b5K2eVyS-6hPZy71puCTOG4ZuYtnZ2VWUKfYVDOCO25TXjDjMWiXUxNBGdtLytHWPvm+7yPsfCtMXGGN9hht7bZziGa2FM4XXz2THe53h+B88Zh+CNeBTfGe2FR-ilrkTsQM4Mvxx-A+2FSXxiYgnGA87Lvxk+980rFuoxMI9PzjmsDkdeC43m+zTf5epHzipiIZcbjKC36A7ahJ9pOV7uSWJa02K-r1sZZsz9Z82v5Vcyfi96jS9AnI7Pa3VvWIZRi1+JWXnNGEdDGd+IqS2nzr8TsTa5c8YbxjaLLzCO5Tvgl3MS+86aP1hmzvNi4DnFMm1WservlOnDPXZHe-wvkBkzp0haWpryGxEeG+A3JjrF3b+O38sMzURnrA8DfxEjFrTYFp0sHav+UPnld6DD1KNgDx8ZH5dcMRrNmAVvGLyiucQUjGvwyBhnPSb4zzDMvx9xNvlnq3HBN-6z+dJ8B-mrOQuLld9pswar-zxhshf7TiCeHiKLlsxR-U1NTVV+IyPiAvxGRyW7+9fxG8j72HO0CI1Ab7jHiNPIr8IuPjP+rfnaP3R+bQyy2By-mtw5eXXL3ZGjMo2lboRZvItvzTG8z-EYrxP74q-46+boL5qLH629Vx7v85cMV4bJP5O-GjvRGwdGFcqQYQXeeFHoxdhTZeKksZKSkqL8RkclBPiNjEh096-jV+9f8rPGL-cw9xzxIPEcuoEfmFk9WfM-lk+Gjx86v1aD8ufYGJ-Ix+FPE8eiu-x7oLGwh2-Nvwuvo9fWg0JOnjwBj9Y7xlhA-sB6QNBtDI1nHCjR3kEyZWZ-j90iGTaqhwwY3E169+vsjQNdZNKUMTJq9DBJTExUfmNjkiRY495ICQuNc-ev4zeQu7V7mBwQfiL1DbQFf5E8kPVToNXc9-jZP3R++U02JlmdiddgmHEMjuETPYZDclTED-RzorO8xthmrOKfkNvjcxjH8u9nfeAcj6HpjIsTpxXJ+Cm9ZPSEnh67+TKwuIvHrqf3Re093jt6MfZgGVI8QOLj45XfhPhUCQ2JUX6Dg6Ld-ev4DfiOVm+BTfJT6IXVXK1uQx6X+5tjTYd-6PrLbyfXZL-TalX8zVhGrct6w-j34DnjGWzavAwMxol70WRY5n3iEPSWOhXHwCz1JetpGzy8gwwa1l4GFLeXfoPaS58B7aWobwcp7NNR9XfAoCLp179IYmNjld-kpAxPd2Nd-tnZJf6z1VxMg+GUmpD9bXrLcXBhr--Q+cX34DdRG0I70Vfr64RhXuN9f24ALvm3gWvGOXxluLV5VeS78KE5Dv+Fvy3nRQxMTsty1XkFDSS-V0PpUdRUCnq3kKJ+baVPfy9WHtjNi7GZF5IvhUU9JDo6WvlNTakq4WFxjl9nAX7xGblX-f1KGDrr71-E-HmuH0v+Cr2FNesJhUfyzvBp-VxY6RobGsz7-LuZn8058KXxoa1mTH0ZfxuzGJnvgd+2nbKkfZda0jk-R-ILmkph3zYeu11kUDE57d6eD9RFehbkSVRUlPKblpopEeHxjl9n18XCwsJurFWQf3wK6-mCN9iCQ-iD32v5vPWWoNP0ivBZ6y3Fp0Z3eQ7b6DDvwThGPwd5MPqmyZeh98Y3MTLvk8NmfCk9dup46+5BZz9hfuHO+jbxma0vFG21WKEs4xjrC4MnerHQYnQWXm3OFjkuuMQ-tx5yYmRbA8HmfPD96D+fIXamfoevTY+qvz8O43vdPejsp8yvzX+CP9ijhwN2yVFdi38Os5bHZgyw+U8wir6iodTNYReu6cvifctNU5cir4UuG9t8Dj2GX2pW1N7R9NL8ar7C3YPOfuL8omNwR24KDYZdXoeXa9FvOLK5E-zNeeATFm3eJXku-HPGCN5njCBPZnUpm9tl-OI-81mbO02+jN-j96E1j+juQWc-8fgXntBEjOcwSF4LVq4lP4Z+27xlGOac9LrAHH6z5aJh1nJa8I1PDLtor-nWcI4fjQ-N6zCMFuMXWK+Yv9fE3YPOfsr8whO+KczADtxZXcnmK5dlpr2l+z-QcOv-sLlafAec+g2dJS9t-R+2LgnsY2g3BvOl8+D6ne4edPYT5hcNJB9MjIre2ZxCGITja+EXpvx+Ldyj4TaXkTECNvkO4mGbUw2X9GTxHIZtjiZjCDUtYmt0mOvjHLZm0CXzTdw96OwnzC81GzSQGBO+4IdY2PqxriV+Ll0bNg3m8zynDoUPbWv3MJeL57b2ED6y9Xyg1xyPT85n4Z7XYdrWLnH8Ovuu+KTvoFKtHL5gwXJGMED+lzjU1iEg-wu-+KroLToKNzy-1hx0WWY9Lnw-8S2aa3MY+F7mMdi8BnQW-xmtNf21tWsZZ3itdA3Y3aPOfsz8Wv+y5ZYtf0Q+CH6p0cAUz2HWerrxi+HlevHLNcAmvdForZnlp8hjEQMTgzOWMM5wvfRaco3o8JXW+3L3qLMfM7+2Xs+VGEaH8WHRPXjGZ-bPBb4W--la+cUnZ4yAQxgmL03MS8ztn4NIDMwxlovG36YHhOel+1tVi9096uxHzK-Nn7oSw2gcHNELxXP4sPXviDPh+Xrwa-ksy0fzfbAKt3DJ3-jHtqYn14RPgCazdgf6TFxu64W4-LOznwq-tj7elRgmHkbnLOfLMeSd-LmpivJLLA2-jAe2bp4xDK+27rwxbfvEkJdGd8lzwTL+Qencla654O5RZz9ifm1uwpUYxmyvFuYd4ONaP4b1U1WUX-9atuYPMFZYzdn2dUB-0V4019aAtzV4bD280nlu7eVw96izHzG-trb0lRgmL+3fv8VyvlYTuh7zF22fCdtPwnJqjBvGLTEvuSv8ZnJa8Gv6y3N0mussvaa2679y9lPg17-GBvpn60vDsN-8a0fDL-5pRdm13ko-c4wh5M7oyYJbdJc8Fr4z-NoeUuTWeA7j+Ar+Ncocv86uS-9FOf0TpjtXM5s7CzPmt-r3QCrv-ORgrWZr+5r593Hw783g12PetzXeK2TljC+RkZEBu9L75NHwof1r3PHc6sBWU+I5v8fPsMs-O6tsfm3djqvZ9eDXjrO9zcxf5ryl2TUdtj0fKpvfiIgIZZf1b1jDKiEhQfdSYD1Y1nS23JWt3YHxnNdsP0XHr7Mbxa9-X7IrWUX5Lb0voT-WtXqQ-3Xbo8X858rmNzQ0VBmOiYlRbqtUqSI1atSQOnXqSN26dQNzFywPjtkcQnvP8evsRvFredyrWUX5tf3LSrNra0ma7vK67ZtGvsrqv5XNb0hIiISHh0tcXJzugZKVlSU5OTnSpEkTyc3N1TwV+WVqSuTQbP0OXuM9x6+zG8mv5Y+uZhXlt7S++nPMaKz5zOgu7FK7oZZq8-puNL-kqWCUfLTt2cZzW4PD8evsRvJreaKrWUX5tX0Ir1Yf8q+vge7CLnMG8VHJ695o-9nW3WA8sTUEbO0O3nP8OruR-MJOWVZRfsvqz4BXGyPQNRgwNmxe7Y3OX+HDM1-BasGYfw6D49fZjeTX8khlWUX4tTwz57G8FLoLu35+YRoe8Jmt14n80I2uH3FtsMk12d4qPOc13nP8OrteFhwcHPAH7X60PRm410oz6N-bz3oZjTPzb22vEluH1X8O6z20uXxoKp+zebq21ynnMR0z3eI13rOef-NNYZY5PTYPGP-a9NnOb-OQbI24sqyi-Su2jqzNX4BXclf0c9jcCq7TvzeGf06Euy+dXauRi+GehF-uPXxC-75Ito6qv+-Xn1+yNS1g0ebUl8evrRFn-MKZzdO9Fn5t7xNbF5b6KvzaHELLS1svJd-BZ6zXuLL5RVsx-7rQZsY1+SxltRS-Oja5+9LZf4Jd8jGYza+9EsO2nqr1LfrrrjZ-oDx+rWZrn+N42-cEDS6PXz7H-U7cCwf4p+xnYPUjOzfs8retPWXr11Q2v-jzrFfH9XHtXKONNZjtxVJ67r7F-u7edFaez3wldqmHsKclnBhXpRmGAestttqm5ZXMyuPX6kCYfQfH2THl8QuX3O+2riP9xfALpzDMebkOtBh2YMbWkL2W+Lei-PK9XC-XwjXZfAob3-AX0GX+Df3rt1vu3d2jzsoy4t0rsUselT2l7V67EsOwaHEn96j-PjUrj1+O4Tts-07Ld-nn9ZbFL1qGjlo-IvMBjF-jxb8eM4+2-tS1rD9ZUX5tbPLnzG1s4XewLpbNP-LPg+A36Xxgd486K8Pg9krsUgNJTv4PBq7EMGY9gea-om-wwv1pnJTFL5-hPubcNi5YPZfXyuOX7+ZcVmeFB-Yk4ZqNXT4D27zPnCC+k99zLevnVJRf6y+xdeT59+GabR132z+d6-SvHWu+vbtHnZVllmcuza6-fgmHV2IYJtE944L7ElbQRPtcefyiiRxveWHLF-M331kev3DAOakXwQM9TcYvWger1nNMrojrxc9mXLqW-uiK8lt6fR3GEVuPmv5JW3+D61R-2bd2Dv9G7h51VpZZnhl+iXfxmdFd2DV+Le-jnwdveWnmpsMFfFgMamte8Lny+DU9tLqR8WvMlscvPHJeNIzrYE4t-Fr8bfuI2TrLHMOYYef4LvglD8dv4zttnXe4Ze0r1pclZuc6-TUkx68zLDwoyrPIixbuWbBnQQGL9xhK8O7T5PggSUsOkippQVKtapBkVQ+SmjWCpXnjatKsUabERARJjapR0rBemj7Wq+3Fa8FB0rZlHbV2rbL1sXVuLcltUl2aNqwqjXLSpWpqrFRJiZG0xEhJjguThOhgicE39O7pSO8+zW2cLY1zsqROjTQ9NjUhQo-DeM53V0kNlZw6yXrO9ORgqV0jTlo1ryk1q8Xo39WrRErdWonSuH6GHs8jx9fJipdGDcOlYYMw6da1hvTv11Tyu3ka3bGmtG3lxcI1PV8iIcizEP2+pNhwSYz24oIob6yJiFKr6PoDMG45Bo2HvTGR3kp6ozt06KCP9FkyZpJHtJwivVz4QO4edvyWx29ibJDex+kpQZKZAbshUrtmqNSpFRZgMc47LiszWtmAH-iI8jSiQ5t6au1b1w3w26JpjQD3sJuRHK38psR7fMSESJznT8JwtPf5lk3rKb+1q6fqsRyDcTx-G7-1s1P0WqqmhSmX8Mv1ZKSEBMaTJg2q6PfyyPHZNROkcaMItfy8mjJwQHPpkV9PunauLe3beP5+bS8eSPLGraQw-c7kuIhL+I0Lj6wwv8xt8Gs1nNaqVUuaNWsm7dq1kxYtWki9evWUVeMXwx-iWHcPO37L4jeBGk1ckN7HVdODJauax0etCMmp68WWOTHSslmWMos+o3ewjAY3qJuq3Hfr1Fi6dPDiubY5qsHwC1s8YsZvelJUQFthGB1m7GjdvL40qe-50NVS9BjT3cy0OKmZmawswi9azvmMVb6D5-AMx-AK6zbecH1ocvNm3hjQNFp69qgjQwa3lF49G3gaXFc6ta8j9esm6+erpEZevL4oSYqJVH5hNzYsosL8khs0DSbXQHzC-IZGjRpJq1atpHXr1lK-fn3VZY7xxzUc6+5hx29Z-CbGBKv2qo5lhkt2rWiP2zhp2ti795smKzPwCkPoLnzADkxz7xf1bC09ujWXzu0bBPhFh9FkXjN2MTQVg0-T2XYtG0nTBrWUVV5Pig3Vz6DHDbKrlfjg3vfAZqd29ZVJrofvqZYRocZ18RrXxnjDI5-DR2jVMkFatoiXosIcGT6srfTt3VQKejSQvC71pXGDdB2TalSN0-EiI9nzWeOiA-zGhIZXmF+YRYNhk0dyDFWrVtU5hk2bNlUNhuX09HTlPPD-dnFOoruHHb9l8ZsUGyKpicGSmR4utbM8dusleNymSuuWGdKuTaYyCQfc5-ijcIPewhN-D+rXWXoXtFEd5tg2LWoru3mdm0hBfgvl1fiFSwxNJtbFOrZpKs0a1pasqknKLtrM67CLb42Owi9c5ndpqlyir1wHr6PB6id74wnH8P08mp-Qrm2KWv9+jWXM6E4ysH8L6VPUVHrmN5bcptV0PKiTlazjR2aa508nxHo+dJRqb3TI9Vmfz-jF8IuZJ4wP3aBBA+nYsaNyzLxDP7-40pr-cvew47cMfpPjQiU9ObQkB1Tb091GqdKmlad1HbKkW5c66hfDBwzjt8JoYY9WGuPi244aViAD+3aS7l2bBfhFJ3t1byn9e3dQTTWG4Radq56RIDWqJCqzXdrnSvNGdfQ186mrpccr053aNtPvZWxB0-letJXv5nvwGRhXuC5j2nwA4mCY7typinTqmCGDBzWXCeO7SfHgNjKgXwspKmgurVvU1PGgfnaGZGele9eULOmJccqvam9waIXZJbePDw2PGHpMfa569eqax+rSpYs0b95cMjMzlfNL-u-C3fwFx2-Z-KbEh3kcXIwh6yZKi2ZVpGP7mpLXNVt6dq+vPjD+qeV00VZ4xYfGJozpK0MH5UnPvNwAv+hzn15t9XXjF91FV+EUrcM-JufcrWNLzUHDLHktDLZbNcuR7l3aKJvwy-f2K2qv5+d7ebRcNLEvvMK45dHgnPGlW9dq0rVLpgwtbimTJ3WXEcM6yOCBraVf71bSrnWdi-nqalKvVhXvulIlIyk+wG9kUEiF+UVvjV-yyuZDo7es1ZGXlyctW7aUatWqXcarP5-lzPF7JX5TE8K92DZcdaxBvSRplZspnTvWlh75OVJY0EhZrFU9VvUNTtDW4oHdlB94nTx+gAwf0l19ZeO3a8dGqr0jintojAvD8Iv2wibsond1a2ZIXidPy5vUVX5jI0r4RZfbtmgovfI7qH8Lv-gBA-p0DHwHRs6NXLTlpnkPzuEXjeaa8-NqSF636l7s21qmTukpI4d39DS4rfTv01o6tK17Md9VQ+rXyZRa1bw4PznhuvOL5hqL+MjEtcS7aHB+fr7msXgO56V70909-NO2+PAkiQqKuYzf+EhqJpHStAE+ZEm9pWFOsvKb3y1HNWrMqK6qq+gYbMCl+qSeJg8bnK8+Mvo7e-pwfQ-OyWdNmTBQ-eqxI4skp3ZV1Vl01+Je9BdeyDvjJ-M+jOM-c0zDutXVd4ZfxhW0lXED-5lcGZpL3oqYm-fgFJ02v5p8OtrMNRD7ds-PkuIhLdR-njShhwwf2kEKezaTLh0bXKxTZ+pYUi09UZJjPZ83NCQwvl2P+m9Z1rhxY8nOzpaMjAz1tf3MOv11FheWeBm-6Ap1zvSkGI+fWh6fJT0PzRpneD5llhT0aKQaNXZ0N2WUexxdI3+Evwk3sIGPPHFsP+WV4+Cnb2E7mT55iL4+uH8XzUOhtWiqxb7w2qheDfWb-fySv+J9XuvaoYXyy5gAo3w-Gk9ejNeI13nOexi5KqtbwS7xANdI-FvYK1v1d9LEfOV35PBO0qewhXTr3Ohivbi6+s-Ev6nxMRITFvqd8duwYUOpXbu25rQ43vHrrDx+8Q25T8m35jau493DNZS9tq1qevd0jvTtnasaNW5MnuopPiZ+NPzACI-GJ-7z6OG91KeGXV6bO3OkzJo2THNacIoG4zNb3Iu+4jNTOyJ3xWsWJ8MRrxP7wq-pKvyivYwd8Auf+AbwxzWRc8Zvtr4sfIYxIwqV3YEDyD13kCmTe8iUSQUyemQXGdC3jRR0z9XPNW9cU8cZ-GfiX+pHjHHfBb-0bhAH06vh959tLRR3D-+0LSYk3rsXoy-hNyEyWqqmJGq+pmXTup5mldRr87o0lN69cj3tba++88TxPZRJmEB7eU4cSmwLn-CB1hLnThrXX3UYlpcsmCCL5o1Tn5varjGMjwonsEvdKL9za+WX3g3r2UCTe3RtK0U9OklBXnvVe3JSNn6gucTEcE08DL+8j0-Pb7C8OP78uFG9ZWhxrowe1dbT3m4yfVovmTq5l45LxYM6Sr-e7fQaWzUvuc66NatKtbRkSYmLLenduA755-L4pY5EPZiclp9X+PXXk5z9NC06OE4iAjksaiJe3BsbL1lV0jyty5TWzXO8+75+CZ9FrWXo4E4eu3nK7uSJBYGcEf4x2spx5KsWzx8v0yYNVq0lBuZx-uzRMnXiIFlx03RlWPNIHqv4wzBsPnOH1k2kZ7d20rdXV-0bXSbPBced2zWXQX17yMA+3ZVfOOS7iX3JP-MI0+jm+NF9lF-Yxk-gkb8ZY4YM6KrXNWVyN5k2NV9mzugls2b2lulTi-S3jRqe5-3WbhpXt2-dQK+zYd0sqZWZ4WlwoiRFx16X-sny+KVuRO8VsW-p3LOrHzmLCoq9hN-YsEjJSEyW7BqZHk81PV+1ocdIE+3BGDakq4wfU+D5mEUybUqRp1WFygH3OLEu3MIJ3KxcPkN5hdOFc8eq3s6bNUoWzBkja1fO0Ud8XfojYQOdhVXzjfsXefwMLNTXiI3hF9+5sHtHGTtioAwbVKT8Mmag7+TLeMRP53rwnflOeMVP53XGFmJ1eGdswcdfuKDEFszvL3Pn9JOZ0-t4v6+X-s4xI3vpNXZu30Ta5DbwNLiO1M2qJtXT0yQtPlGSY+IqnV-iXuZslmbV+i3dPfwTn98biH0jPY4jJD4iWjJT0iSnVg1PF7OlfatG3n3fXGu640b3kulT+susGQO8+7yvp1W9tYaLBqLD+Ms8orG3rZkvNy2eLLcsmyYb1y1SjvGfb146VdavXaD+NX42dSAYppcKRtBXfGPYhVPYpqYEv8TFaO+0iSNl9LD+yi-nnDGlWONsnjN2MNZwXXwP-MIr12a5cnrCuB4+s3LFCLl5+VBZumSIzJ83wPttfXVsmjyht0wc1-diTN1cfYLcxvWkfu0sqVm1ilRJSlGGK5tfejmoMZXOVTl+nV2J34TIGKme5sWhdWrq-dqhdWPvHm6h+jVpfB+ZM3OIzJszRGbP7C8zpvVR3UOjYIJ4Ej2cOXWo3H7bYvWTV98yS+69e43yAkOrbp4pG25dqIyjl+itMcxz+jXwm0cW95WJY4ov4Zd5SOju7GnjlG34RePR2TkzRqgRb3MNcHz3lhXKLz4BvjIck0fnmrk2eL917VhZtXKk3LRsqKfBA73f1U-HpamTPN964gBlPr9LC43HWzatLw2za3k+dFUd4-BTKptf4t4r9UnCr+ufdBYRyF1FSnJ0sqcpSZqboU8Qf7GwewcZPbxItfS+7avk0UN3ydEj2+SxR7fIwwdvl5dOPiqPHrxHtt+1Snm5f8cG2Xf-HXLP1tXK6a2r5mrsS62G3BW6u3ThRPWp0U3Yhyt0G+4YB-DJOR7m0H1yyfR2wTufh1n8b3JiN80YI7cvnyMzR3njych+MqpPVxmY11rWLJgiG2+aLV2bZ0vL7AxZNHm4dGpSS231-MkybkB32XTzXNl5zzr1CTgv5+SaGKuIBfD34Z9rJDeH-02-NX0hzOmgv5p592VZRef-o73Evv55Dq5vw9mV9DcpyoszYxOUX-Ks7Vo2keIBBZ5WDtGY9YFdt8nRx+6RZ57aKU8e2+5xvFVOvfS4nHjmgDx9bK889-R+fX7wwa2qs-RnwCF5JfxQGEXz4ISeDjSSnDEah0bi88IkGsojvJNzwuelRgW-sAb7ls-evGK+PLBljayaN0m5XDJ1pMwaPUB2bVope+5cKwO6tVJm508oli7N6kivdo2V26nDesuti6bJju23aqwOq5wX38FiaZjme8lp8xuIo6kjUz9OTQzSvi-Hr7Mbnb8yfhMiEiQxqqQ2Qp6msHtnmTF5lCxbNEXuuuNmefjAXXL86QfkhZP75PkTD8iJ47vlrTPPyPm3TsgnF16Tb37+jnzxyRvyxJH7lU-y0rBHDyM9UfROoLFwR+w5cmhPZRq2MfzvNStmq++Nxmp-h6d31H7gnM9sWr9EfXH0ER98+7pl8tC29XLbkhnKJUwunzlW9m-foDZtuBcPd2wm00f0lfyWOTKiqLPsvmOVLJw0TI-Dt8dHwCfgvDDLmMO1cZ3Um9BdYnXGGfxv5kWgwfR4OX6d3UiLDU0I8BsbGisxoRFaF8ltVF-GjyqWVcvne8wskwd2bpRjR3bIiyf3y6lXDslrrx6UV1-eL++de0HZ-fU3H8g--fVr+eNvP5UXTzyiMSl5YO7xWPZSCS7xOelfhEu0GX2FE-JN5K-R5Qcf2CwP79+mOosm04sBu+SLYfvOTcu98WSS+ta8hv7uvH2Fsgi7aPDiKSPk3vXL5c5VC1WPhxZ0kDH98qRnm4bqZz+84w5Zu3Cq+tT4-YwJxOnECMTQnNv8fcYcuMWPt14z-GYYxq93-Dq70f3Pxm+U1pGCld8u7VrLsoWz5e7Nt8quezfIoYfulqefuF9eev6AnD71iLx+usTeP-+iXHj3ZdXd3-3qI-ntLz+Ut19-VrbduVL1i-gRfxN+MXhEz-CV4YMajvV3wObzxw-J8ace0vwS-ip918TEWzffotdwx4almtOGbzQadh+8+zblljh4w7JZsnTaKGV3xZwJsmDiUBle2Elj4oK2jVR3H7v-Ltl261I9jvMSt8Mw58WPZlzg2hhnqFHDLTE54wm-h95MGOa3OH6d3UhLikq9bP4R-PbukSd3bVone3beJQ-tuUtzVE8d2y0nj++TV146oPp75rWH5dybz8kbrz0lb55+Wj587xX52WdvKdPHHtutXODn0vdErIj+0hdl83-ptcAHRvOoMT35+ANy9o3j8uyTD6rGkjdCr4lJia1fffGIbLn9JvV30U3yY8cf3i3PP7ZX7rntJrl-82rlGW3dsnKB6iu6C7vdW9VX-eU19Hff1nWa42LMIIfF+dBgi83xD+CV3i2LzfER8KfRXRgmLnD8OruRlhyddln-M2uzDenXW-btvkcO7L3X073tyu-jh+-1NHiXnHxuj7z0wj71n197+ai88NzDqpvEwp9+eFo5xoc+sO8uWb5kimosrFInRlPRX3ou6XNE6+Dx6OFd6ot-8M5L8tjD92nOGn4xYm80nvPvuvc2ZXjPrtvlkQPb5dRTh9Tu23CzxrVwvGz6aM1LD+vVUbrl1lVu2zesoQzPHTdY812Hd9+pGr154zI91+771muODr8fhonFuU7GHrglp0UOy-qnWdeD63f8OruRlhKTLtHBsZfxO2LwADl8cK8cenCH8ktMevjhbV4MfK-mn08+d78yDLfoJfqIDsPvR++-GuAXf9fqM-jTcEG8y72PPw2-+LCvn3pSvv3qXWX-oT1b9HXyvvD++KM7NTeGxuNDU5uCuVdeeEyee+R+eebgTlm-dKb6z1Yboo7Uqm4VaZqVLJ2b1tYaUl6Lehr-Ehsf27dddmy8Ra+PmHvv7k06jsAvxnUy3tBrab1l5LCIh21+hOPX2fcl-1zSQ1nCL+s6De5bJPv37JDtd97m3dubtc77xaen5fNPXpU3zjwmZ996XL7++WvKLD4vPjPsoZM8f+ftk5qXphZMjQbNRN+Ia4kzqS-xN7oL6++efV4+--h1PcfLzx+W-XvvDHBt+bGvvzynDPMZYw6fmbwV+WW4nTSklxraW9i+idaPBuW3keKe7TX3PLZ-vr5P-YjPUMPCXyY3hs7jT3N9vG41X+JgtBffmfoRPj1xMDEwa8-bWvW2DzLrxRu-5e0-7vh1Vpn83nn7ak9771Gte-PME-L6a0fkzdePyDvnnpAP3ivxl+EX5qgF4wMTA--887fls4-OqG-9zBP75PChe5Vl-FQM-YRBclWnXzkmH39wSn7xs-OaB2NMQHPpBcFn5jzwy-t8F3EyfMPvIzs3y9Y1izXPPGfsII1vyT-D5sjeXTR3hRaPH9hDa0n4zxx786xxsnLuRPWVqfsyrjDG3LdtrdaviMvx+cl9089h2ks9jEfmSJBbt-3H-PsgG7-sl+D4dXYj+SV-dfypA+onH9p-p9y-c60cOuBxc8jTvl0rlSH6NZ46uke1EtbwddFKWMTQVHLS8I3WouU8P-PqE2roNWz+-tcfK6f434wH5MDQZc7B6-jXjA-0iODPMx48tf8+jXvJWcEkWowvzXN4htnZYwYq1-CKj03NGN0mh4XmkgejV5ocFr8H3aeHhLoR9WliXx7Ju6HB8EsdCR+69P6L-n1g2OvF8evsRvK7ZeMq2bxxudZGmX-EushdO5fsMcIasuRludfXrZ6nPMEWjMHaX--4ZcDvxQeGRfLV+Nb42bzGI3r9h998Iv-4l6-0M-AP07DNMV99cVbP88uv31OdJg995JEd+n2P77lbc1fEvTBLH8cdt8xTntFZmIVp8tH0ZKHXxMsvHfV0-5lH1BcnN0dcjeEXwDP1LPTXejnwoekxIR9ta9az7ib7BbJvEXuPsV8SOuzfx8nx6+xG8jt53FCdv8C9mpwQJOHslxdaYsmJQYG9UsgTM+cXHmCPPDJ6jB+Njw3TaDDxKwxzDCzC7q9+8b5y+1-+8Vv5l799oz0gfA4dhl14hl+M1zkPeo--feCejZpHpn+DvDP8wqppMDkq8s3UjJ4+sENz1e+8-JR88qbn579zSvPn+OTE6vgG+PbUrqwuTR6NWhLjFDEwOTWLg+kNYz829kyDYxjGl8aHRns1P+X4dXYD+Z0zfZzOH9Q1nrMTdP069Jc1ZlbcPE7vbWoq9CPxSL2I+BR-G42EQdgljiXOxWAYLcavhk16PuAXdrG--OGLgG7-5tsLAXY5Dg1Gs8l3k6d+dNcWrRlRy0Vz7167RHmFWzh+8qF75dlDu1Rv3zxxRC6cfk65-eVHb8lvPzuvsbZpPOMC-jOxMDExPZXEx-RjkX-Gj7Y1pukrIRa2fRXZH9C-T7Htoej4dXYj+V2+eJbnP-bS2K9zh3oydlQPuXPzQnnh5B755KOTql30ENPjQE8-fcHkbdExNNjqwegbDMMI7KK9xLXwC6N-+t1n8rc--1x9aPillwtd5nW4hV-iY14nxmZ8gN9XnzyoPjQxMPMVqAu9cGSfnHj0ATm6d5u8fvywcnv+pSflwzMn5Mvzr8o3F96Q33x6Tn7-xbual8MfYEyw3DY1ZmpU5M2pfVmvNvMfyWORe6YPRdeWbV5P9yhlD2E0GB-a+GX-U8evsxvJ77BBzHtvqbVO9g-t2K62rFs7XZ57dpecPnVI88Tc-7DJPB5qo-Q742+Sc0ZDv-z0TeUVnuEE-shXWU4ZTmETbtHhP--+c-0brvnb8lo84ltzPnJg5KDxg4lj8Y3pxXrr5OPy8RvPK6tnXzgm7596Vj547bi+9vnZl+Wr907Ltx++qfz+7vN3VMfJkRNTY-jQ1LPxIWCZOpetd4sO08sJv-x76Np2LerrnsFoMPuMk8ty-Dr7rtdvpwcrNTY1sP7zmGFD5MI7b8rmDStl5z3rtS+Y-Y9geOL4Annmqfvkww+OB-iFSbhDF+OjS3qdqe-CB3Gw5amIX8lfoXvkmD-78Jx89fkH8ptvPpc--+4X8tc-fKuPv-32C-nlV5-I7375pb737c8-lp9-9r58euGsd12vy7tvn5Lzb76icTDXwPxFmOb7+Js8GjG2+d743Wg914C-zFjCdaC5+AT4ETznmjgnOXXqV9SFqQfjT8OxrWtNX4eu29erofQZ2NKz1tKmQ21JqxoiQaFBasS-0bGhEhpm-95wxzo4kRIa4nEZlXzZepIwCqu2Z3p5fLt72PELv6xBmRKTEuB33Iih8skH5+Too-u0-kuuaNOGhbouY7MmKdK3dzNZv2663vto78lnDyovxJH0EdsenugYMSY+NP0Z8EM8jNaROyqPXx5--YvP5JuffRTg98N335D3zr4m77z1qtaYYBFNpiZFPZm-0Wm0G1YZW-he03p8cPLdHIN-j+EfcF3E54wF9I7hR5OLRoOZK0FPB-pLTbhkXawGym7xyE4yZERn6ZzXQKrV9P490V32ekkI9RgOuSq-UZFJjl9n14Vf-Gfm7xu-k8eO8ni5IG+fod56SLXpy8-OyOOHt0u-Pi2kZo1g3UOUeTtwCBPEr-i46Bc9kmgwOgbfcAQjcIYWwwnsl8cv7PL4iy8-lJ99+p4e-9F7b8oH588ow5yT7-7vf-+9-I--9gf9fnJmfB+s8l0Y4wevEXPj0-MecTXxNSzjq3Nt+BJoONcNv8zBoDYGv8xJIv4l1uf3EeePGp8vk6b3lglTe0th31ZSr2GKxCUGSUx8kCSnRklkdPBV+Y2MSHT8Oruu8-eN31lTJnpMfSnvn3vN8y1PaM7pm6-Oyh9-d0H7rxbOL5b69aI1h4NvifZR84Ul+KCHKcaL78gDwQTai77BD8wxHqCT5fGL7sIux3z5ybvy+UfnPb-gbWUYHbZcNY--+7--WWtQnBf-HN232BwfnjGDR17jGHj+13-+lX7mH-70s0DvCJ9lDgX1ZerB9FQyt9-W98LIZ6HHs+YPlgVLR8jcRcNlyPCu0iQ3U1LSQyUhOVjSMrx-W0+Hw8KDLu5P5llQhIQER0tYqPdeWLzj19l1nb8PvxGeLZw9Q-7hj7+WLz4+7-md76oP+tnHp+Tv-+UXIvIX+eyTF2TDbTN0Xizz6MjnUDMlBpX-+0-KBnPemRMAt8S9cATHMEw+msfy+OU9-Ga01-jlM-jRyrHHm8W0jAnEsXwfPjC+L-ErcTjrYdJrRc6a2JjYl+8n3219I4w9vIZfQDxA-gqOiYPRYHIAts4lPdPMc1h6y1hZsXay9zheRo7tKbmts5RfNDglLVpCw0v4Ze+EyEhPjyPiJCI8XvkNDYl1-DqrkCVEJF82f599BW5aOE-+-s9-kT-8+mfy599-qT7mr755R377q3flH-7ysfztrx-Jn-7wnsax9CrRwwHH5HaoJ9HzzJxetBn-ldgTP5tYE5aJlckplccvzGJffPzOJQbHGLxyTlu7h-wTcwLxbZmjizHfj34L1tKiXg3LzD0k14zPTMyO78D18Bz-AI2m-4tcNAzjS-N7iIXJszMucB7YXbthhixfNUn5bdayuqe9Hq-R3tgY7+ktvS4RwcpifHyCxMelSEy0928eFudpcbTj19l1m7-P+rG2-9HKZYvlf-3bv3gsfe3FhiW12G+-PicfX3hRzp99Ur762Sn5t7+XaBdaSn4LfxIdpjcYH5O+f+YBoJHwAVuwBsvEo4wJ5fHL+8aqsWtMo8nwZnkpfHz0nvoOcwvoU7ZeR66L8UX3-O3UWOtbaCnXhE-NeGKxMedjjOFvy2mjxdSrqGszPrG+CLHxylunKL83rZwow0d3l4ZNMyQypiT-HELcG1LCL+vApqSkSkpyFY-hNOU3KCjK8euswvN-S6+-Ab9rbl4m8j--7jH0seebnlE9Ovvm0-LuuWflg-eOa+3o4w9PKIP4rtzn+JnoE+tlwA35K2JG9Ay+qLNyLCzzGvWm8vjFT+YY49i4xfCr0UzyZvjm9DvyndSv6J1ijEBn4Yw1Pmz9Z1v-BqNGja9AbMzxsEsuy9YCIq4nHqYuxnH0lJGbZj0w1u2A3zXrp6v-XDyim+avQiNK+IVd45c9FNLTMyQ9rZokxKc7fp1dV-+Z+q-ln-GfiX--+odfeTHmW55mvq5xK-nnn39xRr7++Rn55usz8u0vXlcGud-RYGpFVndFC3mOj2pzjNAz9NJfg-3L779RXv-4m6+01vurrz-VnJXFvW+feVHrvO+fOy0fv-+W8ks+i+Ng-r-+0y-Vh2auPewyrw9t5HXqQ3--l19r7M61wRzaSX8kLNs6sHyW+BaG4ZZcGBzj9-M3Wsz4RUxMbZkxAWPew7rbZ8ntd86XW9ZMkf6DO0iV6uHKLhpco2aq8hscUrLeekREpOc7J6r+JiZkSHJSZrl8On6dVYTfD86f9jh7RbXp4wsvy6cfvSxffPaKfPn5y-KzL0p8YPSU3BFaBifWH4lfSsyLNmqu2eMIhmEXnmECBq1GZNz681RnX39J+aVWRM6Z1zmGfg4Y-rf-+ltdQ4M8OLEt2oi-a3MS0WeunesiF47-yzwjYld8fPo96cVAr1n3Fl8fH5prJQ9GTtrqSvgP1Jvh1vjdsm2xbL57kca-fQe2C-BLDbhKZoLGvyGhJX1W5K+ioxIkLjZVNTgxoYrj11ml8vvW6efl7defK5n3d-a4vHf+eMB--ujCc4E5QeSxqLcwL5dj0VliXZ7DM1oGGzyi1dR2YNtyUbBqdSH6q6jvornn3ng5wC-1Ivxp+IZhdJj59tSgYQlfl7ECvee5zSmGP14n1sUn4DqZV0R-CbEytVzqQ8Tw-A5y0zbXkXPAMs+JEaht40Mbw7v2rpGt9y6TxcvHSkHvFgF+6d9ISokM5J9L-OISfmNjUpTh+Lh0x6+zSuX31ItPe5yVzLN-4-Qxeev1Y3L2rWNy-uwxXYMDrcK3xk8mR0u9FDbRPdhGdzG0DC5sHhIsoWf0QdJHhcEpBrPormkv78EvXONDw7DFwuSZySv9z3-7o36PcWzrelBHsr2Y8J2Zm0+czNw-1qAjLqY-Ep8b-4HfYXMcrW7NuMNzzou2o8EcC78HD29WfmfOG6L9V-BL7hn-OT4xTHugI6NK9hqLioqWqMh4j+EktZjoFMevs0rl95Xnn-Q06ajeu6dfPeIx7GncG4-L228e0TWwuL-RJ3iEX3I65HvQLfI-MIWWUVNlDOA9dAx2sTdOnQzYm6897+n9C2rEvZixDb-oMQyjw+g0LDMfl7oQNVlyyszzYw8jXmftKrSVXDS9JOSe+ZseKuYikKumPoQmc-3wbvtJmAbb2GP1JPhmTKCmpGv6HbtbNt21QEaN7yEt2tSQzKxISU4L8SxM+69i4sIkOiZc81HGb2REglpEeILj11ml8vvaS89cpr-n3n4ioL-W14zm4n-CLzzY3HxyS7yHX0oOl-d4tPWyTr98XM688py8-uoJ5RdmzWeGW-TZDIb9Bs-oKXEv3MIw687SR0KfMhxTm7b3qW-BrMXo+PdcO2Y90PwemCV+hluu37QYtk3b8aGJox89ulVWrZsqRf1bSk6jZMmqEyu1spM8S5HqWSmeBkdKXHyUxMbGegzHaP8GuWfr33D8OqtMft98DZ-3uOrnubee0frR++8+q2vXXXj-Wb3PrR+De5ocL3zgg6JjtuYV9zyxIzUYdJfxADZgF+1Fc-GXYdavs8bqlfxsjPqz-O+-yf-5H3+Rf--X32kfB9yxl4vIvwTWrsRs3iJrBPA54mLbPwJu8ZONX-P3uU7zp-V6vb8tD02P9P5HNsnCZSOlfZc6UqN2lNSulyBNc7OkWYvaUr9hliQmR0tCYozExcUF+IVdeijp33D8OqtMfs+94cWgbz2v9-J750-IhfdOykcXTmrtl-n76BgxMPqFX8n6FfQ6oK9oLqzCLrldXodheEbLYKc0u+St8I3JZZHTKs2vPz5GqzmXrbNFHpwxAx+duhb+O72c-+vf-6S8cgx8E5tzLDk2WMSft-HE-GbOw9+MP9ZHbXk3-Afjd++B9doD3bx1VcmoFiLZ9ZOkTfscadexkTRvkeP50LGSmBSr-RsxMbGezxyrcxeCtfYb5fh1VjF+o0vmK0SFBklSbGjg+cI5U7SXwq91VzLudcsTEQ-iU8Iq-MKo+ZzkfXid3A8aDHfkn02n0T5qS2giY4F-fq7FpPDOcTYfEN23fimYpA5Nvhl2YZo5CbZ2B+9zHJ-z+8s2L4rz+nXXfGauUWMHj1vqYfwu+63ksR87tEeWzJ8unds11-3F2X98cL+eugd5p7bNpE6NNKlVzfOlMxIkw9Ni-o1jvVg8kr4O-q0ruL+3u4cdv2Xxaz7r1Yx7Ht+a+5pcEPc2msZ9z+vc87pPgscvfjUMc5zxC5vwYuvpwK+-PlwevzBpmgqn9FvQtwHDNjdJez89vYV164vkHDb3l++z2pb1nvB9FvNq7OCLf7l+cs-we-99d8rMKWOkXctG0qxhbSns3lHGjRwkI4v7SlGPTspuVtUkyUyLkzQvFk6MCZGYcMevs++G39I5o9LGvU-MCIPc5+gUZvc97MIq-KK7GDksWwPa5gvZ3FybX2g562vlFz7h1Hof0WF6S8xXtjWp+QxjBN9juXPsSgzzm2wtTfMH8DWMX91zZeUSGTGkj+Q2zpaWTetJ8YBeMm-mRJk1dawyjO7CLtqbEh+u-97Gb0Sw49dZ5fJLPFqWGQPmj3Kf21p1cAyrGPxiaDMxscXH1tvBOYwrxgP-voZl8Wvs2vwhDI4tZwXfcIsR72J8DuMc9p1XYphxxa-R-vU5qDmTa58+aZT07NZOGtatLm1yG6j23rxkjiyeN00mjB6i3KK7sMu-b3xUkPLLvzEMO36dVSa-5IDLstLsGnewicbiL3O-2zpxcIsmm-EZ850tNuU1mLX4uCx+TV9NYzE-s3YcZvzaezbPiGOuxDDXYfUlrpFr4DfRuwG77LeC3uI7162ZIW1bNFRmly+eLbOnjdP3+DfFZ+bfGXaJfY1fNcevs0rklx6JsgytRENh1ubawSt5Zox+KPLOvA67MImGwTd-G4-oIBxZ3zHn0z2XyuEXrTWG4dHmR-h9ZIurLd9lms3nTJevxDDmXxuLPBa-jRoZPV3MA+5T0EVaNKkrtaunqv6OHtZffWfYhWfj1W-RYf9hjl9nlckvvYplGTEhTHJfU0-h3qaHEv+SHC3zCehVooZktRhyWjy3+cBwYxoJP5bTZjy4Vn4tvvXnl+GQR5s3YfxarGz1JD-3fobhFh229efxH-hN9IywLjS9l+SriH3ht1WzHBnSv0Dj4fatGktqQoT6yGamuXBrLDt+nVUmvzb39mpm9zV1I-b-Yi4Q60Wx9jn5WXqy0GD4tXwzTPJc14+9qL0Wl8KbjQmctzx+Lb8Mh5zD6k9WE+LR+qxsDUrLVVNbMp-bn9uymMC-Z5PlrfhNrMvDvgzM-yfHbPyiw9SNsHq1qui-pRm5KmPY8evsellcZFCA2eS4MH3Oa8sWzpR--utvtQ-Kb6XzVzBIXQhmWSuHdWXQYdv-E9-Z5hJYPshyXvABLzZHwOq91vdBrgv9szqU9XrxGXSc2NpiXXvdX9vlnFb7sVyy+cQ6n-ni8f79Efluzg23HMu4wXN8ebSX38R6AOxHTt81zFL7heMBvfM1l0UdCe0tzS--xjDLvy-jJnGx699wVhEjp1KaX+4xehL+9qdf-cc6cRfXbLV1063-CXbxkekrZt0N-ErWiKOXkrm2vA+H8OefA2yclcev9UDZPifmA3Ms75fHr-VN2VwEW0eW67BxxMYINJ-vsjUq4d38AGIAclasrcVvZA4TexHSr9Gja1vpld9B2cVvRnvNl3H8Ovuu-Wf8vAWzJ+u6GKxTwxxdGKYvGWaZc-DK80-JSyee0DooMS-r5rCPKPP00CnqvOiw5a3g0NZ-9seZ5fFLDIzfyvnIH3E8-jKfhbny+LV+SLTf+LW+K-ORed16my2-hgZzfmrX+P-MMybfTM6K+RGsAc367eSp+hflSfcubaR18-rKbnpSlOatHL-OKtu4h4xfYxmj-sF6Nl9-cUHn2ZJrpt+K+QYvPufFgk88Ik89flDzVtzf6BJ7BJPb4Z6HBx7968PBltVujLXy+OX81Gv4Dl6DOduH0NbCK4tff-+Ffy13-3wFjkGj+W7YNT-afGm+n7nDrD-LXGFbx535ilMnjJChAwvVh87OStcxMFDbDXX8Oqvk9Sd9mmu+NDZt4khdowbtxYdGe5lngO4+95QX8x45II8-sk85xbfFh4Zd9Nj2BeWR+x8u0Tk4s1yx9TGWx6+t+0geDJbhD37psYLd8vg1RjHj13iGW+vT4LtNgxlz+G7ids7Dc64BDcbPIG+FBrP+M72TaDDai+76ebXcguPXWWWZxbzw6-f5Jo4p1vXjbJ8h85vR3uNPPqra+8Rj+9WPRbuYl8D8fXiDHziFHdvnF5-Z5hjg-5oGl8cvOSrYwUcnJ8Z3cR74tZpvWfyaj+yf2wuv1h-p969tfhF+g62Tw2fRZDQY-WWPctbEZS131oWnX4N8M3MX-OOfPx5x-DqrtPVj48MD-HJv2f02dsRAXaMGZl976Vl59YWn5eWTT8oLx4-KiacfU4bxoWEC5oh5iQ-pCcZfhgl0zOb32z7dthco3F0Lv8S+1KbgFx8avqgTMQZci-76c93Gr39+gj83zet8v39+oOkxYwhr3LFvCnuJUvslj8VcI3JY9F-5xz+e0zfp+HX2XfFLXdLuN-qI8Jvh1W-PP-v4JUaOB9bQXnI7xMFoJj3PMA03pr02pwANtrl85fELS3ALv-jmaCF+t-U+lsev-zWLh21+oO0bavyiwXw-30u+GZ-d+j-xnVm-g3V5+hW1Vx+aPVTIO9M-yTwj--gHn-Q+O36dVaZxXxm-lm-B74Nf4tuHHrhHDu7bIYcPPqD+MppL-HvymSNqtp4qfQ3UV7jPYRkdRrPwQWHR9kthbh86DG-K7MtP6R7c7Kn9hy89xr94V75+-4xcOO3x9fxReWr-fXJs33Y5unebPPnQvfLCkX1y7sUn5Mvzr8qvPzl72fwJ-9wD9NQ-Rvj7qUx-rSZWOj4gvj92+CF93LB2uYwZPkD7quhrWXPLIs3PM78oLy9PcnNzpWrVqpfwxHqTrLnh+HN2I-ndu+tuefD+7XJg733yyP7dOl-96KMPKsvc28S7NhfW1q9DK61-kvfwgdE6dNP6pGBJ5-2+8bycfeGYPP-YXnniwXuU0ZeP7Zf3Xn1GGT3+8G559tAueebgTnnukfvl1FOH5P1Tz8pX752W3352-pJ5RDBqvcuWr-LXmkvP0deernOnA-E9cQI+BmMUv4-fSc7u3q0bdV4RvvKc6eOVZ4x5RrCbnZ0tiYmJl+7L6vh19j3gd9c9m2Xn9jsCtvveLfLAjrtk3+5tqs1oL7lnep7hF7N1oNFefFAeqePCi+ljYH7RiSPK5s7bV8iGZbPkjlvmyYF7NsqZZx+Vz8++LC8dfUhefPxBfXzt6YdVe02v0Wqbe+TvYfZrsn99jdJze7Wv42I-CmvnnXrxGY0Jnjn2sGrvkYf3ar0MfqkTkROgL23zhlWybtVS1WB0F3bZ-8Tx6+z7xu-2O9fLXZvWyu3rbtF7lvnq69fcJHesXyl33r5G-WR6CvGb2d-A+p7hGt8aLSb-RD4Xhq3HiRyvxsg77pCHtq2X+zevll2bVsreu26Vw7vvlBOPPiCvPnlQ9RZu33juMWX3wzMnVJfh9zefngv0P1tdqvT8I3+tCN01vzrA8MVeMta-pDZGbs5qY8QMjFOrb14ok8YO1ZoamnvTollaM6JP8moM8jprTjp+nd1Ifk1ruGfnzpigc+PwIRfNnaqv0fdMzor5dBg1FtujhByuzUUiHwTD1FQx+qn4e8+da+Xgvber73zy8B7VWWJcfGZeg+HTzzyisTB+86dvvaj84j8TJ19p7qB-fRzLMduazlYvspoR7KK9FvviO6O9sEu8wLiF9tIbmd+5tfY4k7NiTZzwMv5d2e-IzT9wdqP5vW31Mp2PPmPyaBk1tJ-Ojxs2qEjjwSnjh2sNhb6rZYsm6XP6oOnjgFsYxrfmkfopsTL5XHqizZ4+sENZJbaFX4zn+NTkroiLX3nigLx18nHll3gZ--mj10+qFvtj3yut4exfw4Ncs-VCw6768V58i-ZSH8N3fvroIf3dsHvowZ0a5xL3Vk2NDfzb8Nz+ra7272r7CTp+nd1IfvEdybmSf2WuOn2+aBE9v-QNso8Q-Qw8Uk+hRrp+7QL1pWGY2NcMPcanVm6P7VUNfv34YY1vyS-v375B9fjBu2+TR3Zulsf33K0MwzTxMLnqD147rrktcl741NZb5c9LwSn5MouxqTlRk+Zvq-cav6xfS4yL70w+nb4UcnQPP7RLc3b4GfRG+nuZqbkFejW8ONcMHmHWHws7fp3dSH5XLJunfjOaC7vMr2Fd1IK89tKvsJv2AmNjRhTqXgfsf0CPoc0BtjUn4Rb95RG-mZw0fjT8EuuSs9p261LZdPNc2bJygdy34WZlGYbRZ-xomIVhHvGpyVNbHGv1XLQWVmEWdqkl6z4P3t+856-3wjzai+9Mb4rFvvCL9u7fc68M6ttD6tfJDLBLj6TNUdC5lnFxASPexWeGYcevs+-C-P1+1n+AtsAr9zDrsOEn2zoxNTOT9d6lt4hH9hZib3v28WvXKlutU7v6uq8Y+5bQI0zPP7ExcTFxMD0Ztl462kqNiLoReSs0mFwW-G5ft0xzWvu2rtP30GJ8a3jmeDSb+hTns31aGBf4DsYNm-9va37wncY1TGPkn+EX7aWujZF3Jue8dsXiS3T3SlbR-gvHt7Prob+2LoT1DtGrQA6HHBV5V3p8WWeiRpVEnZuOqQZ5n4-wtDslIUj3ta+TFa-7hLGnbs+8XJ0jC8-sJTagT0ftW4Jn5sDjX+MrX83glsdD920K+NIYz3mN9zgHeg6fmO0PCMfwCbNmsFuaX-LP1I3g1-rL8J3p0aC32fHr7Pts5jPbGk3mP1PrxJfkPibfjK9MvYTcDX1-HKPrO3mfj4-2PhMXJImxQbqfPZqcmR6uTLOvNprcvWsz6dOrrfYeMneWPkS4XjBxqCyZOlJumT1eblsyQ+5avUhrwdSR0GI4fXTXFjnywFbllnoTfjW+NrVieq7pU6ZHGUbRXFsf3noxjVUz+DUj92y+M-OZ4Zc6N7+f3+v4dfZ9ttLzzC0-g8-MvUydFx+auglzbHjPenhhmDnsXTs2kta5taRe7SQ19taFY7S5alqY1KwWIw3rpUnLZlmqx2gzxvO29atJ56a1pbB9Exle2Emmj+gry6aPllsXeT738jnKMTpLjRg93rHxFuV21bxJsnTaKF0vgJ4Rasm2Pyn+NJwSE8MzLFN7tjWnLR7Wub4XezbomYRhfOdVyxdonF8eu45fZ9+H9TfMh-bnaJi-T152x7ZNmsMij9Mgu9ol6+3wWeaxFw-sptrarVNj3bdT13XzNLZKaqiuEUVsDMdoNUxHe-zzHr52vHeuVM9vz0oIkcbVE6Vj45rK8pAe7WREUWdZu3Cq6jIsY+sWT5flM8fKvPFDlHXW3GLvbXJhxLm23g2ckm9Gi0uvG2-86l6CF+Ne6kaPHrhftmxcrbEDeyY4fp39EOb-mt9sViUlRmtG9AXTI0n-BnVf8q7+Y9FuclfoKvqLP8waWPRAMze2IL+Fztlhvh2xLzrdKCdd0pODlWMsAX-de0zzmM6MCZJaSWFSLz1aGmZ6cXSNJBla0EFG9+0mU4YWyewxA5VbHqcN7yOThvTSebjE0jAKr3AJqxiskvu2fLetx2NxMfEyMYL1bGzbcpvGvE0b1LpsTHP8Ovs+GjGsf50XDO2hz5c168hh0YNErZf1YfzHab6adSY8TU6IKfGV0WJiUtZXxWeGVfxp4l-qTNSKJ4zpq8f1LmgjLbMzJLd2mmpvTkaM8gvH6RElutygapwek98yRwblt5Gx-fNlcnGh8ozxPaxbi7b613m1GjN1Z9u3FMbxpY1f9JpaEfzySG8ka7Db7-PPp3T8Ovs+GnWg0vdptfR4vZdZ35k5OPRQUk9iL0z-cfq54EutWaNM5bNDm3qXvE6Ompi4acOqqsXzZ4+Wdavnqb4OzGstBW0bSfuGNaRRtQSpER8sKd6YEhdUYlW88QG+YRi-evzAHjJ1WG-1n1kPg95rdNX2F4NVakiwS98Xj7bvofnWti83uWbmK+A70xvq95uvxYd2-Dr7PtR-S+vv-FmTtLeQmgpzkOjfb96oTiBeJg5mfjr6jQ-O6+S00GT8ap5zjO25B+s2h538NXlseojJizGfiTnG40cN1nkB9GwSfxOH+8-N57i2RvVqaE8Ufcjkr+j1orcLvYVb5j6hv-jP9HjhN6O51kdpe5qS59q7d6+sWLFCCgsLJSMj45L5Q8nJyY4-Zz84fmGLnit6C8nL0stgcaHlr+ARtuCTR-8+XWb8Dd88cryt8WE9xPSCEFPDLf3VtocuTHds0zSwlrx9lufsx0kfCfuW4BOsvmWW9nlZzRetpacDDYZR26vU1oT170fMMRs2bJDp06dLhw4dLpnD6-h19kOq--oNXbX8M3mdrXfcqvMV4Ne-piJaC4vwa-0c1ptlXPPc9pznu3jkPXx09hzhHOgpe+eix3DNWlKl9y+wvjBi8LxOrbQ+i49ArzVzFE1n4RifGS22PQ4t3rU9leAWjWae4-jx41V769ate9n6GUlJSRXml17oipi7R539-9Z-YZB1UamNktdhni8aSf+VrRftZwpOyVnTm4Wm8giHnMf2rbZ9b3mEaY6BRd5HU3lOnzF6zN+c07+eFPrLOVmndfjg3ppfozZNrow5TvjCsAm3+NJoMXFuoM7rMcwx5LLgnTmPzJVq06aN5OTkSEJCwmXz73mtovzSC10Rc-eos-Lqv6XrR2gfPZP0I8Ev+ssc2A6tm1wyd4541vxomIM9asQ8mpYSr8Ix3MMujzBrvnNO7arKMuu-oe-0iPA5zmlz9qymhd-MXD7mBLGmAGv7sK46Ma+xav2Ttl8aZn40x+Fr43OzfxH92enp6RIfH3+Z1sFeTExMhfn1z0-6z5i7R52VV-9F5-wM89rkccO0L4l1oOgnZK0Y8kXwBt-40Wg3DOMfG38w1qR+TdVTuIRr2EODYde4JJeN3uIrwzjHGPOWDzf95bOclxoWunv35nU6N4jalvU-2zxfNJa-4RWeqRfBNHExdWnWyKQmTW2avs6raVxISEhgTmBFLDIyskLm7lFn5dWPLEdk-MIZ67fTT0hvEj0c9GCRG2aPW5uDZGvPwi8c8h59h8SysOn3pWHeeqaJfeG7Yd3qqsGwbD5z6XicvzmW-mvWEWD9LXwC4nJqW6ztAau2zob50MTC8EtcjD-NOj-EysxTZl5F-ewUyUgJuWzOPdxipscV5Tc6OrpC5u5RZ2UZHOLXluaXfDO5Z9aUYS0KerDIGVG3gU3TVeMXDtlvnrnBPJKTIj+FpqKvjBOWz+Kz8M4xxNTEtDy3XhL-tXBt6Dr5M3xmuKXnkZ4L+GVtDzTX1saxmpHNUcSXJldFjZh5T6y-Tq+Y9YD517uJiIhQzfPnsSrKLz54Rczdo87KMrS3dK8gjE2fNErXpEB76elnLjAaTO7XclPoIqwRQ8MyTKK97EfAfGF6puEX39ryU8S31JE5Dm7RYP5Gq-3XYDnrrh1aaD8y64BQI6YebXsw4dvbmnS29jv+sq27RWzMc+rDrA3CnCfmUsRG-kdfSWX3X5S3P7d--v+VLCUlJbCOZen1tZx-7aw8fllDBp2jP4m1J3v37Kys4Tub-pqfy9-wCePkmdBr9BWDV-xr+hOp8+Jnkw-jeMYCxgF-LpzYl1wY846JxenhZBxhnSr-WnO2pjO+M7kq8la2pyn8wi7rgdC72bZlHZ3XGBPh+HX20+AXbtE52KGPEi3E17V9Mkv3UxLv4j-r2jrD+qt+dmmfq343PRlwy-twjP6Si7bcmT+Pho-NZ2GXNQTIoeHPM1+XNSONYdaaZP0r+qps3xNiXdhlXgO6C7tob06dZJ2THEU-SGjJo+PX2Y+ZX9trgVwveV9eRzetvwLm-J-Hl8ZfRnOJhY1T8sfEsWgqfjaxMcdZj5Xtg4ih72g4YwA+O3P6iMG5HtbLYM0bejvZL4F1J1nLivousS5+M+tfbrh1odZ34RbdhV1iXnxnY5fnjl9nP2Z+6e23fZDIH1F7JbY19uCR-DG+s-U5W58GGo2Okm-mfZjnGNNZ+16OJcfF6xg9lPRoMJ+A9eNZQ511IekHY04jBr9oMH4zeSr8ZtbhgF1qRKyjR66ZeNfWAjF2MXxo5k05fp39mPmlhsQcHThi3wV8WdaSJZaFR1gjhqUuTK6K1-z5Yz+nVzOOh3HOw3jAOfmOe+7aoHVe6kVcB7zCra23ruPLxXXg8ZvZB+K2NfN1DvLAvp10zS2YhVXzmTHWD+B1x6+zHzu-5HvZv4w5QcwpxNBF5g-AmtVzqR-BH-lky2+Vnpdo848sV4VRq0Kb8a2t9kScTP814wbs4r-DL9djexET+-Iaa1oS79LLTMzLfKQRxT20RpSVGR3IU5nPDMuwa+b4dfZj5pceSub3wS1rctBDgQ9NLwes2WfIWxHjwh4xr9V-bc6RrZfFuak-4Vej17xHbprxgLw0tSTqTtSb8dmJv-GdYRVmuR7GFOpH+Pab1i-R9XPoreKRvSCYX8y6IFG++cnGLpqLmS47fp39sOcPsg555EWjnypYEqNiZPTQwR47++Xlk0-Ic08f1P3I7tu+Sm5dPUPmzy2WieN7yKgRnZUTYksYgQn+Zm06fFfWw+I91uaAFfxW1qqk76l2jTjtgWI9HavnsF4H-Nk+SQ-t2aK6ynwicsu25g09VszHpy9jza03ycrVS2T5LQtk0pRR0iw3R4K8MQOLiQuRKO+7yzJ6rWCBXkl4oOeJddjpiWb+QkX5s39nzm2v+bmjZ6Qso4eDa+IzXGPp-R2cOX5L8xsbFiHDBvaTR-azh9cuOfhgyVy7Xfetle1bl8uWOxbIxvUzZf266eqv0tMEe-71Nsj1wih5Xx5ZWweWk+NL3mOtaF6HeR5ZS2fNitnKJYyST2YOETEtPVbEuTYfELYZT-Cbt92zSe7efrssXjpbunRrI2kZcQFuQ8KCKp3f8sy0Eg6ZX4zx3Pquy+t-dvw6K9N-DvP8zCDvHgmOlYigCOU3wrP+hT1l767tsn8P+-uW7EN28KEtnt0hhw5s8myjGn2J5HzpkWBeANpbo2qU6iwxJ6zCLD4r+ssj6+jYWu-Dh3TXtXTos0B3mUdkPcxWy0VnbU4CHPM3sS6+887dW2X12mXSp193yaiaIOGs05EcKUkpURIWUfn8Xsv8fb6DYzknxnNe473y+p8dv87KspSYdIkPT1SLVA0O1ni2qHs32bFtsxdjHvJYelD5eeLxnXL0sXvkyOGtcviRzWp3bFiqNVdYQ6PhmL2Q0FPm+GTXTFBjXWj2ZWDNZ95jTcopEwbqeZmDwDhAzxTcMpeIuhA9GfQ-2tpzprusV4fuz5kxQhYunimdurSS2PhQ1VsesejYYIlLCKt0fm2+w9WM88Iga3kwVxHjOa-xHt9Vljl+nVUmv-RJGHcYLPMafGHUYTE0lj1Gqe-AKj4xvjL7fdqac3yeHkjraWZPI1uzGYNh-ICN6xZpXxVjAPEuHFrMm5warcZr34X+XnOccpFj49ZeN02+mjl+nVWm-8x8AdjiEQbpoSBmxfB9MWo8+Lvkh3mEd-hlTi7P4Zi9A9nHl-18mYvA-CG0l7yVfQf+M73NrLnBuu0Tx-aT9CrxUj0rVapkJkpCUoSkpsfq32gvPFc2v507dy7TWFera9euUlBQIH369FHjOa-ZmltlmeO3TPt-";

var COLOR_BACKGROUND = 0xC8C8C8;
var COLOR_LINE = 0x133C40;
var COLOR_BIGBAR = 0x133C40;
var COLOR_BAR = 0x133C40;
var COLOR_WIN_BACKGROUND = 0x55CCAE;
var COLOR_FAIL_BACKFROUND = 0xC76363;

var PIN_RADIUS = 8;
var PIN_DISTANCE_TO_CENTER = 120;

var playerWidth = Player.width;
var playerHeight = Player.height;
var playerCenterX = playerWidth / 2;
var playerCenterY = playerHeight / 2;

var sharpBack = $.createShape({lifeTime: 0});
var sharpMain = $.createShape({lifeTime: 0, x: playerCenterX, y: playerCenterY});
var sharpFront = $.createShape({lifeTime: 0});
var canvasMain = $.createCanvas({lifeTime: 0});

var gameData = {
    levelNumber: 3,
    data: [
        [3, 8, 2, 1, 0], // 初始球数，需要插进去的球数，旋转速度，顺时针转-1逆时针转1忽快忽慢0，限制时间
        [5, 10, 1.5, -1, 10],              
        [6, 18, 1.5, -1, 15]
    ]
};

var gamePassNow = 0;
var gameStatus = 0;

var pinsAngleArray = [];
var pinsRotationNow = 0;
var pinsLeavedCount = 0;
var pinsTurnSpeed = 0;
var pinsTurnDirection = 1;
var pinsTimeLimit = 0;
var pinsSafeMargin = 0;

var timeWhenPassStart = 0;

var gameDescription = $.createComment("操作说明：鼠标点击屏幕把小球插入♂空隙",{x:playerWidth/2-300,y:20,color:0xFFFFFF,fontsize:18,font:"Verdana",lifeTime:2});
gameDescription.width = 600;
gameDescription.autoSize = "center";  

var pinsSafeMargin = Math.asin(PIN_RADIUS/Math.sqrt(PIN_RADIUS*PIN_RADIUS+PIN_DISTANCE_TO_CENTER*PIN_DISTANCE_TO_CENTER)) / Math.PI * 360;
var passText = $.createComment((gamePassNow+1),{x:playerCenterX-8,y:playerCenterY-14,color:0xFFFFFF,fontsize:24,lifeTime:0,parent:sharpFront});
var msgText = $.createComment("剩余球数："+pinsLeavedCount+" ，剩余时间："+pinsTimeLimit,{color:0xFFFFFF,fontsize:16,lifeTime:0});
msgText.transform.matrix3D = null;

///////////////////////////////////////////////////////////////////////////////////////
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-=";
function extract(data) 
{ 
	var bmd = Bitmap.createBitmapData(1, 1); 
	var output = bmd.getPixels(bmd.rect); 
	output.clear(); 
	var dataBuffer = []; 
	dataBuffer.length = 4; var outputBuffer = []; 
	outputBuffer.length = 3; 
	for( var i = 0; i < data.length; i += 4) 
	{ 
		for( var j = 0; j < 4 && i + j < data.length; j++) 
		{ 
			dataBuffer[j] = BASE64_CHARS.indexOf(data.charAt(i + j)); 
		} 
		outputBuffer[0] = (dataBuffer[0] << 2) + ((dataBuffer[1] & 0x30) >> 4);
		outputBuffer[1] = ((dataBuffer[1] & 0x0f) << 4) + ((dataBuffer[2] & 0x3c) >> 2);
		outputBuffer[2] = ((dataBuffer[2] & 0x03) << 6) + dataBuffer[3];
		for( var k = 0;k < outputBuffer.length; k++) 
		{ 
			if(dataBuffer[k+1] == 64) break; 
			output.writeByte(outputBuffer[k]); 
		} 
	} 
	output.inflate();
	output.position = 0;
	return output; 
}
function loadBitmapData(width, height, raw) 
{ 
	var bmd = Bitmap.createBitmapData(width, height, true, 0); 
	bmd.setPixels(bmd.rect, extract(raw)); 
	return bmd;
}
/////////////////////////////////////////////////////////////////////////////////////////

function drawBitmap(bmd, canvas, x, y, scale) {		
	var bmp = Bitmap.createBitmap({bitmapData:bmd, lifeTime:0x7FFFFFFF, parent:canvas, scale: scale, smoothing:true});	
	bmp.x = x - 22.5 * scale; bmp.y = y - 22.5 * scale;    	
	pinsImageDataArray.push(bmp);
}

function createHollowCircle(sharp, x, y, r, mr) {
    sharp.graphics.drawCircle(x, y, r);
    sharp.graphics.drawCircle(x, y, mr);
}

function drawOnePin(sharp, centerX, centerY, angle, distance, radius){
    var radian = angle * Math.PI / 180;
    var pinCenterX = centerX + distance * Math.cos(radian);
    var pinCenterY = centerY - distance * Math.sin(radian);
    
    sharp.graphics.lineStyle(0, COLOR_LINE, 1, true, "none", "none", "miter", 10);
    sharp.graphics.moveTo(centerX, centerY);
    sharp.graphics.lineTo(pinCenterX, pinCenterY);     

    sharp.graphics.lineStyle(0, COLOR_BAR, 1, true, "none", "none", "miter", 10);
    if (radius > 0) {
        sharp.graphics.beginFill(COLOR_BAR);
        createHollowCircle(sharp, pinCenterX, pinCenterY, 0, radius);
        sharp.graphics.endFill();
    }   
}

function playAnimal_toNextLevel(distance){         
    if (distance < playerWidth * 2 / 3 && gameStatus == 255) {        
        for (var i = 0; i < pinsAngleArray.length; i++) {
            drawOnePin(sharpMain, 0, 0, pinsAngleArray[i] + (-pinsRotationNow), distance, 0);
        }                   
    }
}

function playAnimal_playLevelAgain(angle){   
    if (gameStatus == 255) {
        var distance = 0;
        for (var i = 0; i < pinsAngleArray.length; i++) {
            distance = pinsAngleArray[i] - angle;
            if (distance > 5) {
                pinsAngleArray[i] -= 10;
            }else if(distance < -5){
                pinsAngleArray[i] += 10;
            }        
        }
        sharpMain.graphics.clear();   
        drawOnePin(sharpMain, 0, 0, angle + (-pinsRotationNow), PIN_DISTANCE_TO_CENTER + 4, PIN_RADIUS);
        for (var i = 0; i < pinsAngleArray.length; i++) {        
            drawOnePin(sharpMain, 0, 0, pinsAngleArray[i] + (-pinsRotationNow), PIN_DISTANCE_TO_CENTER, PIN_RADIUS);        
        }
    }
}    

function levelInit() {   
    gameStatus = 255;      
    pinsRotationNow = 0;
    pinsTimeLimit = gameData.data[gamePassNow][4];
    pinsTurnDirection = gameData.data[gamePassNow][3];     
    pinsTurnSpeed = gameData.data[gamePassNow][2];
    pinsLeavedCount = gameData.data[gamePassNow][1]; 
    
    (Tween.to(sharpBack, {y:0}, 0.001)).play();
    sharpBack.graphics.beginFill(COLOR_BACKGROUND);
    sharpBack.graphics.drawRect(0, 0, playerWidth, playerHeight + 4 * PIN_RADIUS * pinsLeavedCount);
    sharpBack.graphics.endFill();
    sharpFront.graphics.clear();        
    sharpMain.graphics.clear();        

    sharpFront.graphics.beginFill(COLOR_BIGBAR);
    createHollowCircle(sharpFront, playerCenterX, playerCenterY, 30, 0);
    sharpFront.graphics.endFill();    
    passText.text = gamePassNow + 1;
    if (gamePassNow > 8) {
        passText.x = playerCenterX - 14;
    }

    pinsAngleArray = [];
    var number = gameData.data[gamePassNow][0];
    for(var i=0;i<number;i++){      
        pinsAngleArray.push(i / number * 360);
        drawOnePin(sharpMain, 0, 0, i / number * 360, PIN_DISTANCE_TO_CENTER, PIN_RADIUS);
    }        
    sharpBack.graphics.beginFill(COLOR_BAR);  
    for(var i=0;i<pinsLeavedCount;i++){
        createHollowCircle(sharpBack, playerCenterX, playerCenterY + 150 + i*PIN_RADIUS*2.5, 0, PIN_RADIUS);
    }
    sharpBack.graphics.endFill(); 
    if (pinsTimeLimit == 0) {
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：无限，福利在最后";
    }else if (pinsTimeLimit > 0) {
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：" + pinsTimeLimit + " s，福利在最后";
    }    
    gameStatus = 1;
    timeWhenPassStart = Player.time;
}

function addOnePin(){    
    //trace(sharpBack.y);
    var pinAngle = (270 + pinsRotationNow) % 360;
    if (pinAngle < 0) {
        pinAngle += 360;
    }
        
    //reDrawBars(sharpBack);    
    sharpBack.graphics.beginFill(COLOR_BACKGROUND);
    sharpBack.graphics.drawRect(playerCenterX-PIN_RADIUS, -sharpBack.y+playerCenterY + 150 -PIN_RADIUS, 2*PIN_RADIUS, 2*PIN_RADIUS);
    sharpBack.graphics.endFill();
    (Tween.to(sharpBack, {y:sharpBack.y-PIN_RADIUS*2.5}, 0.1)).play();
    drawOnePin(sharpMain, 0, 0, pinAngle, PIN_DISTANCE_TO_CENTER, PIN_RADIUS);                    

    var number = pinsAngleArray.length;
    for(var i=0;i<number;i++){      
        if (Math.abs(pinsAngleArray[i] - pinAngle) <= pinsSafeMargin) {            
            //sharpBack.graphics.clear();            
            //drawOnePin(sharpMain, 0, 0, pinAngle, PIN_DISTANCE_TO_CENTER, PIN_RADIUS+3);
            gameStatus = 255;                        
            COLOR_BAR = 0xC1392B;
            sharpBack.graphics.beginFill(COLOR_FAIL_BACKFROUND);
            sharpBack.graphics.drawRect(0, -sharpBack.y, playerWidth, playerHeight + PIN_RADIUS * 2.5);
            sharpBack.graphics.endFill();
            //(Tween.to(sharpBack, {y:0}, 0.001)).play();
            sharpMain.graphics.clear();
            sharpMain.rotation = 0;        
            //Player.seek(133000);
            interval(function(){playAnimal_playLevelAgain(pinAngle);}, 1, 50);
            timer(function(){gameStatus = 0;COLOR_BAR = COLOR_BIGBAR;},1000);
            return;
        }
    }

    if (pinsTimeLimit == 0) {
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：无限，福利在最后";
    }
    
    pinsAngleArray.push(pinAngle);      
    pinsLeavedCount--;    

    if(pinsLeavedCount == 2 && gamePassNow == gameData.levelNumber - 1) {
    	gameStatus = 1024;
    	sharpMain.graphics.clear();
	    sharpBack.graphics.clear();
	    sharpFront.graphics.clear();
	    passText.text = "";
	    msgText.text = "";
    	Player.seek(108000);
    	drawBitmap(faceBMP, canvasMain, 0, 0, 3.2);    	
    	return;
    }

    if (pinsLeavedCount == 0) {     
         if (gamePassNow < gameData.levelNumber - 1) {
            gamePassNow++;
        }else{
            gameStatus = 6;return;
        }        
        gameStatus = 255;
        sharpMain.graphics.clear();                
        sharpBack.graphics.beginFill(COLOR_WIN_BACKGROUND);
        sharpBack.graphics.drawRect(0, -sharpBack.y, playerWidth, playerHeight + PIN_RADIUS * 2.5);
        sharpBack.graphics.endFill();
        //(Tween.to(sharpBack, {y:0}, 0.001)).play();
        sharpMain.rotation = 0;
        var distance = PIN_DISTANCE_TO_CENTER;
        interval(function(){playAnimal_toNextLevel(distance+=20);}, 10, 40);
        timer(function(){gameStatus = 0;},500);
        return;
    }
    gameStatus = 1;
}

function refreshFrame(){
    if(gameStatus == 1 && Player.time > 100000) {
        gameStatus = 255;
        Player.seek(8000);
        gameStatus = 1;
    }
    if(pinsTimeLimit > 0){
        var timePassed = Math.round((Player.time - timeWhenPassStart) / 1000);
        if(timePassed > pinsTimeLimit) {
            gameStatus = 0;
        }
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：" + (pinsTimeLimit-timePassed) + " s，福利在最后";
    }    
    if (pinsTurnDirection == 1) {
        pinsRotationNow += pinsTurnSpeed;
    }else if (pinsTurnDirection == -1) {
        pinsRotationNow -= pinsTurnSpeed;
    }else if(pinsTurnDirection == 0){
        var timePassed = Math.round((Player.time - timeWhenPassStart) / 1000);        
        if(timePassed % 3 == 0) {        
            pinsRotationNow += pinsTurnSpeed * 2;
        }else {
            pinsRotationNow += pinsTurnSpeed * 0.5;
        }
        
    }
    if (Math.abs(pinsRotationNow) >= 360) {
        pinsRotationNow %= 360;
    }   
    sharpMain.rotation = pinsRotationNow;
}



function gameWin(){
    sharpMain.graphics.clear();
    sharpBack.graphics.clear();
    sharpFront.graphics.clear();
    passText.text = "";    
    gameStatus = 255;    
    ScriptManager.clearTimer();
    ScriptManager.clearTrigger();
}

function runGame(){
    switch(gameStatus)
    {
        case 0: levelInit();break;
        case 1: refreshFrame();break;
        case 3: break;
        case 4: break;
        case 5: break;
        case 6: gameWin();break;   
        case 1024: {
        	if(Player.time > 131000) Player.seek(108000);
        	if(Player.state == "pause") Player.play();      
        	break;        
        }     
        default: break;
    }
}

var faceBMP = loadBitmapData(240,150,face_data);
  
var controlButton = $.createButton({
    x: 0,
    y: 0,
    text: '',
    alpha: 0,
    lifeTime: 0,
    onclick: function() {
        if(gameStatus != 4 && gameStatus != 6 && gameStatus != 5 && gameStatus != 255 && Player.state != "pause") addOnePin();        
    }
});
controlButton.width = playerWidth;
controlButton.height = playerHeight;

var runTimer = interval(runGame, 24, 0);