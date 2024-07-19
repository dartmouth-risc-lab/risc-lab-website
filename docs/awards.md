# Awards

<div class="award-table">
  <div class="year">Year</div>
  <div class="recipient">Recipient</div>
  <div class="award">Award</div>
  <div class="level">Level</div>
</div>

<Award
    recipient="Quinton Qu"
    award="Neukom Research Prize: OUTSTANDING GRADUATE RESEARCH IN COMPUTATIONAL SCIENCE"
    level="3rd Prize"
    url="https://web.cs.dartmouth.edu/news/2024/06/kudos-neukom-prize-winners"
    year="2024"
/>

---

<Award
    recipient="Yunzi Shi"
    award="MSDA Outstanding Thesis Awards"
    year="2024"
/>

---

<Award
    recipient="Yunzi Shi"
    award="ICCP 2024 Student Travel Award"
    url="https://iccp-conference.org/iccp2024/student-travel-award/"
    year="2024"
/>

---

<Award
    recipient="Sarah Friday"
    award="NECV 2023 Best Poster"
    url="https://necv2023.github.io/"
    year="2023"
    level="Honorable Mention"
/>

---



<script setup>
import Award from '../../components/Award.vue'
</script>

<style>
.award-table div {
  font-size: 1.25em; 
  font-weight: bold; 
  line-height: 1.5;
  border-bottom: 2px solid #00693e;
}

.award-table {
  width: 100%;
  display: table;
}

.award-table .year {
  display: table-cell;
  width: 10%;
}

.award-table .recipient {
  display: table-cell;
  width: 20%;
}

.award-table .award {
  display: table-cell;
  width: 60%;
}

.award-table .level {
  display: table-cell;
  width: 10%;
}

</style>