<!DOCTYPE html>

<head>

  <title>
    PrInstant
  </title>

  <!-- All CSS3, JavaScript and Jquery --> 
  <link rel="stylesheet" type="text/CSS" href="style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="app.js"></script>

</head>

<body onload="display()">

<!--PRELOADER SECTION-->
<div id="preloader">
    <div id="top-bar"></div>
    <div id="left-bar"></div>
    <div id="right-bar"></div>
    <div id="bottom-bar-left"></div>
    <div id="bottom-bar-right"></div>
    <div id="prinstant-white">PR</div>
    <div id="prinstant-red">INSTANT</div>
</div>


<div id="page" style="display: none;">

  <!--HEADING SECTION-->
  <div id='heading'>
    <h1></h1>
  </div>


  <!--SIDEBAR SECTION-->
  <nav class="side-menu" id="sidebar">
    <a href="#home" class="scroll"><img src="images/Logo.png" alt="PrInstant" id="logo"></a>
    <a href="#home" class="scroll">Home</a>
    <a href="#features" class="scroll">Features</a>
    <a href="#pricing" class="scroll">Pricing</a>
    <a href="#team" class="scroll">Team</a>
    <a href="#faq" class="scroll">FAQ</a>
  </nav>

  <div id="toggle">
    <button id="open-button" class="open-button" onclick="toggle_menu()">&#9776;</button>
  </div>


  <!--HOMEPAGE SECTION-->
  <div class="section" id="home">
    <h1 id="prinstant-white">PR</h1>
    <h1 id="prinstant-red">INSTANT</h1>
    <h2>1234 OTTAWA STREET · OTTAWA, ON A1B 2C3 · (123) 456-7890 · PRINSTANT@GMAIL.COM<h2>
    <a href="https://github.com/9-10-21/9-10-21_Info">GitHub</a>
    <a href="https://twitter.com/Andy13624945">Twitter</a>
    <a href="#">Facebook</a>
  </div>


  <!--FEATURES SECTION-->
  <div class="section" id="features">
    <h1>Features</h1>
    <h2>Product</h2>
    <p>
      is a non-traditional, modular 3D printer that aims to be more time-efficient and effective than the traditional 3D printers. It uses multiple nozzles and a freely-moving printing head to simultaneously print multiple layers of an object.
    </p>
    <h2>Components</h2>
    <p>
    The PrInstant comes in 3 parts: the printing head, the connecting tube and the material resevoir. The printing head has multiple nozzles that are activated dependent on if it is viable to use more during a print. In addition, it is made of a very flexible mateiral able to able to simultaneously print on multiple elevations. The connecting tube is made of an elastic material allowing the printer head to move without restrictions. Finally, the material resevoir is made of a study material. All 3 parts are easily connected to one another through a simple plug-and-lock system.
    </p>
    <h2>How it works</h2>
    <p>
      Rather than stacking multiple 2D layers to creater a 3D object, a PrInstant machine prints multiple layers simultaneously. A PrInstant machine starts by creating a core for the object. After, the printing head goes around the core, printing multiple layers at a time. As a result, 3D printing times decrease by 10 fold.
    </p>
  </div>


  <!--PRICING SECTION-->
  <div class="section" id="pricing">
    <h1>Pricing</h1>
    <h2>PrInstant Mini</h2>
    <h2>PrInstant Original</h2>
    <h2>PrInstant Max</h2>
  </div>


  <!--TEAM SECTION-->
  <div class="section" id="team">
    <h1>Team</h1>
    <h2>ANDY UNG</h2>
    <h2>ZAIDANE EL HAOUARI</h2>
    <h2>JUGHURTA MENZOU</h2>
    <h2>PATRICK LORANGER</h2>
    <h2>MARCO VETHANAYAGAM</h2>
  </div>


  <!--FAQ SECTION-->
  <div class="section" id="faq">
    <h1>FAQ</h1>
    <h2>How does it work with Amazon?</h2>
    <p>
      Simply go to Amazon and find an item, below should say compatible with PrInstant. To checkout with the item with PrInstant, simply click payment options and click the option with PrInstant.
    </p>
    <h2>Does it Work with Other E-Tailors?</h2>
    <p>
      Most other e-tailors have not just yet. We are working in collaboration with them to support PrInstant. The ones that do Shopify, Amazon, E-Bay, Alibaba, Walmart, and Chapters.
    </p>
    <h2>What Payment Types does PrInstant Support?</h2>
    <p>
      We support Credit Card, Debit Card, PayPal, and Bitcon.
    </p>
    <h2>What if I Need to Change the Size of my Printer?</h2>
    <p>
      If the machine is not worn out, we will reimburse you for 80% of the value of the machine that can go towards the other printer you would like to exchange.
    </p>
  </div>

</div>

</body>