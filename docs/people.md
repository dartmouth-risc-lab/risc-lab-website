# People

## Assistant Professor
<Professor name="Adithya Pediredla" image="/images/portrait/AP.jpeg" link="https://sites.google.com/view/adithyapediredla/">
 is an Assistant Professor in the Department of Computer Science at Dartmouth College, where he leads the Rendering and Imaging Science (RISC) lab, focusing on the intersection of computer graphics, computational imaging, and computer vision. Before this role, he is a postdoctoral fellow at the Robotics Institute, Carnegie Mellon University. He has a Ph.D. from Rice University and a master's degree from the Indian Institute of Science. He won the Ralph Budd Best Engineering Thesis Award for his Ph.D. thesis, the Prof. K. R. Kambati Memorial gold medal, and an innovative student project award from the Indian National Academy of Engineering for his Master's thesis.
</Professor>

## PhD Students
<div class="flex-container">
  <Student name="Juhyeon Kim" image="/images/portrait/example.png" year="2022-present" studentUrl="https://juhyeonkim.netlify.app/" />
  <Student name="Sarah Friday" image="/images/portrait/example.png" year="2023-present" studentUrl="https://www.linkedin.com/in/sarah-k-friday/" />
  <Student name="Dhawal Sirikonda" image="/images/portrait/example.png" year="2023-present" studentUrl="https://scholar.google.co.in/citations?user=VCfRKJwAAAAJ&hl=en" />
  <Student name="Quinton(Ziyuan) Qu" image="/images/portrait/QQ.jpg" year="2024-present" studentUrl="http://quintonq.top/index.php/projects/" />
  
  <!-- Add more students... -->
</div>

## MS Students
<div class="flex-container">
  <Student name="Yunzi Shi" image="/images/portrait/YS.jpg" year="2023-2024" studentUrl="https://shiyunzi.info/" />
  <Student name="Atul Agarwal" image="/images/portrait/example.png" year="2024" studentUrl="http://example.com" />
  
  <!-- Add more students... -->
</div>

<script setup>
import Professor from '../../components/Professor.vue'
import Student from '../../components/Student.vue'
</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0px, calc(3vw - 32px), 16.2px);
  align-items: center;
  justify-content: center;
}
</style>