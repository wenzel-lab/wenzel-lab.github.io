---
title: People
permalink: /en/people/
ref: 2-people

layout: memberlist
role_tags:
  pi: 'Principal Investigator'
  postdoc: 'Postdoctoral Fellows'
  phd-student: 'PhD Students'
  ms-student: 'MS Students'
  undergrad: 'Undergraduate Students'
  researchstaff: 'Research Staff'
  visiting: 'Visiting Scholars'
  others: 'Honorary Members'
  alumni: 'Alumni'
aheader: '| Who are they | When were they here | Where they went |'
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

