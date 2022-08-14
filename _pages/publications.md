---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

 <h2 class="year">papers</h2>
{% bibliography --file papers %}

 <h2 class="year">workshop papers</h2>
 <br><br>
{% bibliography --file workshop %}

 <h2 class="year">theses</h2>
{% bibliography --file theses %}

</div>
