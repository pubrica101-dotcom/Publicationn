const serviceData={
 research:[
  ['Research service','Systematic Review','Clear questions, transparent methods, and reliable evidence synthesis.'],
  ['Research service','Meta-Analysis','Integrate findings from multiple studies for precise and robust conclusions.'],
  ['Research service','Original Research Article','Empirical research support with writing and editing for publication-ready work.'],
  ['Research service','Scientific Writing','Specialist academic writers and editors for strong, source-validated papers.'],
  ['Research service','Literature Review','Structured literature searching, synthesis, and narrative development.'],
  ['Research service','Grant Writing','Detailed proposals that communicate objectives, methodology, and significance.'],
  ['Research service','Experimental Design','Method-focused support to improve study structure, rigour, and reproducibility.'],
  ['Research service','Biostatistical Programming','Statistical programming and analysis support for research workflows.']
 ],
 editing:[
  ['Manuscript Editing Services','Manuscript Editing','Detailed content editing, proofreading, formatting, and structuring.'],
  ['Manuscript Editing Services','Book Editing','Developmental, line, copy editing, and proofreading for polished drafts.'],
  ['Manuscript Editing Services','Thesis Editing','Academic-rigour focused editing aligned with institutional requirements.'],
  ['Manuscript Editing Services','Post-Editing','A precision-focused final edit after initial revision.'],
  ['Manuscript Editing Services','Scientific Editing','Expert review for clarity, accuracy, terminology, and academic style.'],
  ['Manuscript Editing Services','Proofreading','Final quality checks for language, consistency, references, and presentation.']
 ],
 publication:[
  ['Publication Support','Journal Selection','Match your study with journals by scope, audience, impact, and fit.'],
  ['Publication Support','Journal Submission','Streamline submission against journal guidelines and author instructions.'],
  ['Publication Support','Peer Review','Critical review by domain experts with targeted revision feedback.'],
  ['Publication Support','Formatting Service','Refine citations, tables, headings, figures, and overall journal layout.'],
  ['Publication Support','Response to Reviewers','Structure clear, evidence-based responses to reviewer comments.'],
  ['Publication Support','Poster Creation & Design','Transform research findings into engaging, conference-ready posters.']
 ],
 physician:[
  ['Physician Writing','Case Report','Document unique clinical or diagnostic cases with systematic writing.'],
  ['Physician Writing','Research Proposal','Detailed proposals outlining objectives, methodology, and significance.'],
  ['Physician Writing','Customized Writing','Research content adapted to your audience, tone, and project needs.'],
  ['Physician Writing','Physician Manuscript','Medical manuscript development for clinical and academic audiences.'],
  ['Physician Writing','Clinical Literature Review','Targeted evidence reviews supporting clinical questions and decisions.'],
  ['Physician Writing','Patient Education Materials','Clear, accessible content designed for patient-facing communication.']
 ],
 data:[
  ['Data & Science','Biostatistics','Statistical support for study design, modelling, inference, and reporting.'],
  ['Data & Science','Bioinformatics','Analysis workflows for complex biological and biomedical datasets.'],
  ['Data & Science','Data Collection','Structured data collection support aligned with research objectives.'],
  ['Data & Science','AI & ML Solutions','Health economics, segmentation, predictive analysis, and algorithm support.'],
  ['Data & Science','Interpretation & Visualisation','Turn analytical outputs into clear figures, tables, and insights.'],
  ['Data & Science','Data Science & Analysis','Practical analytical workflows from raw data to research-ready outputs.']
 ]
};

const grid=document.getElementById('service-grid');
function renderServices(key){grid.innerHTML=serviceData[key].map((s,i)=>`<article class="service-card"><small>${s[0]}</small><h3>${s[1]}</h3><p>${s[2]}</p><a href="#contact">Enquire Now →</a></article>`).join('')}
renderServices('research');

document.querySelectorAll('.category-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.category-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderServices(btn.dataset.tab)}));

const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('main-menu');
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});

document.querySelectorAll('.has-dropdown>button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));

document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit',(e)=>{e.preventDefault();const note=document.getElementById('form-note');note.textContent='Thanks — your enquiry is ready to be connected to the Pubrica contact workflow.';e.target.reset();});

const revealObserver=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('revealed')}),{threshold:.08});
document.querySelectorAll('.service-card,.dark-card,.insight-card,.metric,.feature-bar article').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(14px)';el.style.transition='opacity .5s ease, transform .5s ease';revealObserver.observe(el)});
document.addEventListener('scroll',()=>document.querySelectorAll('.revealed').forEach(el=>{el.style.opacity='1';el.style.transform='translateY(0)'}),{passive:true});
setTimeout(()=>document.querySelectorAll('.revealed').forEach(el=>{el.style.opacity='1';el.style.transform='translateY(0)'}),300);
