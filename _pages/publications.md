---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

 <h2 class="bibliography">Papers</h2>
{% bibliography --group_by none --file papers %}

 <h2 class="bibliography">Workshop papers</h2>
 <br><br>
{% bibliography --group_by none --file workshop %}

 <h2 class="bibliography">Theses</h2>
{% bibliography --group_by none --file theses %}

</div>
