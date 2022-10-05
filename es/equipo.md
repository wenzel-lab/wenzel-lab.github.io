---
title: Equipo
permalink: /es/equipo/
ref: 2-people

layout: memberlist
role_tags:
  pi: 'Investigador Principal'
  postdoc: 'Postdoctorados'
  phd-student: 'Estudiantes de Doctorado'
  ms-student: 'Estudiantes de Magíster'
  undergrad: 'Estudiantes de Pregrado'
  researchstaff: 'Personal de Investigación'
  visiting: 'Visitantes'
  others: 'Miembros Honoríficos'
  alumni: 'Antiguos miembros'
aheader: '| Quién es | Cuándo estuvo aquí | Dónde se fue |'
---
{{ page.aheader }}
| :----------- | :------------------ | :-------------- |{% for profile in people_in_role %}
| <a class="name" href="{{ site.baseurl }}{{ profile.url }}">{{ profile.name }}</a> | {{ profile.description }} | {{ profile.where }} |{% endfor %}
| Nicolás Buzeta          | IPre 2022-1 | |
| Benjamín Henríquez      | IPre 2022-1 | |
| Gustavo Cornejo         | IPre 2021-2 | |
| Matías Martínez         | IPre 2021-2 | |
| Francisco Javier Concha | IPre 2021-2 | |
| Yerko Chávez            | IPre 2021-2 | |
| Rafael Kaempfer         | IPre 2021-1 | |
{% comment %}
| Ruth Vallejos           | IPre 2021-1 | |
{% endcomment %}

