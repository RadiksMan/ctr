<div class="wrapper promoblock-section">
    <div class=" wrapper-main promoblock-wrapper animate-section">

        <div class="promoblock-item animate-it">
            <div class="promoblock-item-content  ">

                <svg version="1.1" width="320" height="320" class="atom-circle animate-delay active" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" >
                    <g class="outside-cirles">
                    <circle id="outside-cirle1" cx="160" cy="160" r="130" stroke='#de5c5a' stroke-width="1" fill="transparent" />
                    <circle id="outside-cirle2" cx="160" cy="160" r="120" stroke='#ce423f' stroke-width="1" fill="transparent" />
                    <circle id="outside-cirle3" cx="160" cy="160" r="110" stroke='#ce423f' stroke-width="1" fill="transparent" />
                    <circle id="outside-cirle4" cx="160" cy="160" r="100" stroke="#f0f0f0" stroke-width="5" fill="transparent" />
                    </g>
                    <g class="small-circles">
                    <circle id = 'small-circle1' cx="0" cy="0" r="45" stroke="#f0f0f0" stroke-width="5" fill="transparent" ></circle>
                    <circle id = 'small-circle2' cx="0" cy="0" r="17" stroke="#f0f0f0" stroke-width="7" fill="transparent"></circle>
                    </g>
                    <g class="atom-circle">
                        <circle id="atom-circle" cx="160" cy="160" r="15" stroke="transparent" fill="#fff" />
                    </g>
                    <g class="inside-cirles first-cirle">
                    <ellipse id="first-cirle" cx="160" cy="160" rx="65" ry="25" stroke="#f0f0f0" stroke-width="4" fill="transparent" />
                    <circle cx="96" cy="160" r="6" fill="#fff">
                        <animate attributeName="cx"  values="96; 224;  96" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="cy"  values="160; 178; 182; 185; 182; 178; 160; 142; 138; 135; 138; 142; 160" keyTimes="0;0.083;0.166;0.249;0.332;0.415;0.498;0.581;0.664;0.747;0.830;0.913;1" dur="4s" repeatCount="indefinite" />
                    </circle>
                    </g>
                    <g class="inside-cirles second-cirle" transform="rotate(45, 160, 160)">
                    <ellipse cx="160" cy="160" rx="65" ry="25" stroke="#f0f0f0" stroke-width="4" fill="transparent" />
                    <circle cx="96" cy="160" r="6" fill="#fff">
                        <animate attributeName="cx"  values="96;224;96" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite"  />
                        <animate attributeName="cy"  values="160;178;182;185;182;178;160;142;138;135;138;142;160" keyTimes="0;0.083;0.166; 0.249;0.332;0.415;0.498;0.581; 0.664;0.747;0.830; 0.913;1" dur="3s" repeatCount="indefinite"  />
                    </circle>
                    </g>
                    <g class="inside-cirles third-cirle" transform="rotate(-45, 160, 160)">
                    <ellipse cx="160" cy="160" rx="65" ry="25" stroke="#f0f0f0" stroke-width="4" fill="transparent" />
                    <circle cx="96" cy="160" r="6" fill="#fff">
                        <animate attributeName="cx" values="96;224;96" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="cy"
                            values="160;178;182;185;182;178;160;142;138;135;138;142;160" keyTimes="0;0.083;0.166;0.249;0.332;0.415;0.498;0.581;0.664;0.747;0.830;0.913;1" dur="2s" repeatCount="indefinite"  />
                    </circle>
                    </g>

                    <animate xlink:href="#outside-cirle1" attributeName="r" attributeType="XML" values="130;140;130" keyTimes="0; 0.5; 1" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" />

                    <animate xlink:href="#outside-cirle2" attributeName="r" attributeType="XML" values="120;130;120" keyTimes="0; 0.5; 1" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" />

                    <animate xlink:href="#outside-cirle3" attributeName="r" attributeType="XML" values="110;120;110" keyTimes="0; 0.5; 1" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" />

                    <animate xlink:href="#atom-circle" attributeName="r" attributeType="XML" values="13;15;13" keyTimes="0; 0.5; 1" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" />

                    <animate xlink:href="#small-circle1" attributeName="r" attributeType="XML" values="40;45;40" keyTimes="0; 0.5; 1" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" />

                    <animate xlink:href="#small-circle2" attributeName="r" attributeType="XML" values="16;19;16" keyTimes="0; 0.5; 1" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" />

                    <animate xlink:href="#outside-cirle4" attributeName="r" attributeType="XML" values="100;110;100" keyTimes="0; 0.5; 1" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" />

                    <path id="motionPath" fill="none" stroke="none" stroke-width="1" stroke-miterlimit="0" d=" M 160.00001,60 A 110,100 0 1 1 160,60"/>
                    <path id="motionPath2" fill="none" stroke="none" stroke-width="1" stroke-miterlimit="0"  d="M 50,200 A 110,110 0 0 1 64.514197,87.451463 110,110 0 0 1 155.96488,40.004232"/>
                    <animateMotion    xlink:href="#small-circle2" dur="4s" repeatCount="indefinite"  fill="freeze"  >
                        <mpath xlink:href="#motionPath" />
                    </animateMotion>

                    <animateMotion xlink:href="#small-circle1" dur="4s" repeatCount="indefinite" fill="freeze"  >
                         <mpath xlink:href="#motionPath" />
                    </animateMotion>


                    <g fill = "navy">
                        <text style=" font-size: 20px; font-family: Roboto, sans-serif; font-weight: 900; fill:white;" >
                            <textPath xlink:href ="#motionPath2">
                                ОПЫТНАЯ КОМАНДА
                            </textPath>
                        </text>
                    <use x = "0" y = "0" xlink:href = "#motionPath2" stroke = "white" fill = "none"/>
                    </g>
                </svg>

            </div>
            <div class="promoblock-text"> Мы опытная команда <br/> быстрого реагирования</div>
        </div>
        <div class="promoblock-item animate-it">
        <div class="promoblock-item-content ">
            <svg version="1.1" width="328px" height="328px" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events">

                <polygon id='BGQ3' points="56,39 288,60 268,291 35,271" style="fill:none;stroke:#a94644;stroke-width:2"   />

                <polygon id='BGQ2' points="86,19 308,91 237,312 16,240" style="fill:none;stroke:#a63f3d;stroke-width:2"  />

                <polygon id='BGQ1' points="4,214 114,8 320,118 210,324" style="fill:none;stroke:#dc5858; stroke-width:2"  />

                <polygon id='QMain3' points="228,70 257,70 257,100 228,100" style="fill:none;stroke:white;stroke-width:3"  />

                <polygon id='QMain1' points="78,81 245,81 245,245 78,245" style="fill:none;stroke:white;stroke-width:5"  />

                <polygon class='Clock' points="78,81 245,81 245,245 78,245" style="fill:none;stroke:white;stroke-width:5"  />

                <polygon points="162,92  162,108 " style="fill:none;stroke:white;stroke-width:2"  />
                <polygon points="162,220 162,236 " style="fill:none;stroke:white;stroke-width:2"  />
                <polygon points="89,166  105,166" style="fill:none;stroke:white;stroke-width:2"  />
                <polygon points="219,166  235,166" style="fill:none;stroke:white;stroke-width:2"  />
                <polygon points="110,218  122,206" style="fill:none;stroke:white;stroke-width:2"  />
                <polygon points="110,114  122,126" style="fill:none;stroke:white;stroke-width:2"  />
                <polygon points="202,206  214,218" style="fill:none;stroke:white;stroke-width:2"  />
                <polygon points="202,126 214,114" style="fill:none;stroke:white;stroke-width:2"  />

                <polygon id='Mstrelka' points="160,167 166,167 163,95" style="fill:white;stroke:white;stroke-width:1"  transform="rotate(0) translate(0 0)"/>

                <animateTransform xlink:href="#Mstrelka" attributeName="transform" attributeType="XML" type="rotate"            from="0  163  167" to="360  163 167" dur="10s" begin="0s" repeatCount="indefinite" fill="freeze" />

                <polygon id='Hstrelka' points="160,167 166,167 163,130" style="fill:white;stroke:white;stroke-width:1"  />

                <animateTransform xlink:href="#Hstrelka" attributeName="transform" attributeType="XML" type="rotate"            from="0  163  167" to="360  163 167" dur="60s" begin="0s" repeatCount="indefinite" fill="freeze"/>

                <animateTransform xlink:href="#QMain3" attributeName="transform" attributeType="XML" type="rotate" from="0  242.5 85  " to="360  242.5 85" dur="4s" begin="0s" repeatCount="indefinite" fill="freeze"/>

                <animateTransform xlink:href="#QMain2" attributeName="transform" attributeType="XML" type="rotate" from="0  242.5 85  " to="-360  242.5 85" dur="10s" begin="0s" repeatCount="indefinite" fill="freeze"/>

                <circle id='Ostrelka' cx="163" cy="167" r="5" stroke="white" stroke-width="1" fill="white" />

                <polygon id='QMain2' points="207,51 277,51 277,120 207,120" style="fill:none;stroke:white;stroke-width:6"  />

                <text id='text-cach' x="85" y="270" fill="white"  style=" font-size: 20px;font-family: Roboto, sans-serif; font-weight: 900; ">СЖАТЫЕ СРОКИ</text>
            </svg>
        </div>
            <div class="promoblock-text"> Мы работаем в <br/> очень сжатые сроки </div>
        </div>
        <div class="promoblock-item animate-it">
            <div class="promoblock-item-content ">

                <svg version="1.1" width="290px" height="315px" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events">


                    <polygon class='BGtriangle3' points="13,184 195,1 262,250" style="fill:none;stroke:#be3e3e;stroke-width:1"  />

                    <polygon class='BGtriangle2' points="229,280 2,148 228,23" style="fill:none;stroke:#be3e3e;stroke-width:1"  />

                    <polygon class='BGtriangle1' points="8,115 260,60 180,307" style="fill:none;stroke:#dc5858; stroke-width:1"  />


                    <polygon id='triangleMain3' points="219,104 229,145 190,135" style="fill:none;stroke:white;stroke-width:3"  />

                    <polygon id='triangleMain1' points="188,31 241,228 42,176" style="fill:none;stroke:white;stroke-width:5"  />

                    <polygon id='nike1' points="125,125 140,140 149,190" style="fill:#ebebeb;stroke:#ebebeb ;stroke-width:1" />

                    <polygon id='nike2' points="140,140 187,90 149,190" style="fill:white;stroke:white;stroke-width:1" />

                    <polygon id='triangleMain2' points="160,144 225,80 249,167" style="fill:none;stroke:white;stroke-width:6"  />

                    <text id='text-cach' x="0" y="78" fill="white" transform="rotate(-44 110,38)"  style=" font-size: 20px;font-family: Roboto, sans-serif; font-weight: 900; line-height: 20px">КАЧЕСТВЕННО</text>


                    <animateTransform xlink:href="#nike1" attributeName="transform" attributeType="XML" type="scale" from="0 0" to="1 1" dur="2s" begin="0s" fill="freeze" />
                    <animateTransform xlink:href="#nike2" attributeName="transform" attributeType="XML" type="scale" from="2 2 " to="1 1" dur="2s" begin="0s" fill="freeze" />



                    <animateTransform
                        xlink:href="#triangleMain3"
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0  212.7 128"
                        to="360 212.7 128"
                        dur="6"
                        begin="0s"  fill="freeze" repeatCount="indefinite"
                    />
                    <animateTransform
                        xlink:href="#triangleMain2"
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0  212.7 128"
                        to="-360 212.7 128"
                        dur="6"
                        begin="0s"  fill="freeze" repeatCount="indefinite"
                    />
                </svg>
            </div>
            <div class="promoblock-text">Мы работаем на <br/> качественный результат</div>
        </div>

    </div>
</div>