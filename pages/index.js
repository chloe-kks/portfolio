import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { GitHub, Mail, Instagram, AssignmentInd } from '@material-ui/icons';
import { IconButton, Typography } from '@material-ui/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyeongseo Kim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, World!
        </h1>

        <div className={styles.selfinfo}>
		  <div className={styles.headtitle}>Software Engineer</div>
		  <p className={styles.description}>
            My name is Kyeongseo Kim, and I am a junior software engineer. <br/> I am in love with the computer world!
          </p>
	      <div className={styles.icon}>
	      <a href="mailto:kks.chloe@gmail.com">
	        <IconButton aria-label="Gmail" color="inherit"> <Mail /> </IconButton>
	      </a>
	      <a href="https://github.com/chloe-kks">
	        <IconButton aria-label="Github" color="inherit"> <GitHub /> </IconButton>
	      </a>
	      <a href="https://instagram.com/k._.kks">
	        <IconButton aria-label="Instagram" color="inherit"> <Instagram /> </IconButton>
	      </a>
	      <a href="/Chloe-resume(2021)-eng.pdf" download>
	        <IconButton aria-label="Resume" color="inherit"> <AssignmentInd /> </IconButton>
	      </a>
		  </div>
		</div>

        <div className={styles.workinfo}>
	  <div className={styles.headtitle}>Work Experiences</div>
          <div className={styles.card}>
            <h2><a href="https://kr.tmaxsoft.com/">Tmax</a></h2>
			<h3>2021.02 - present</h3>
            <p> - Responsible for CI/CD of ERP Service within <code>Kubernetes</code> cloud platform</p>
			<p> - Developed frontend and backend services using <code>React</code>, <code>Node</code></p>
	        <p> - Participated in designing the cloud architecture of the service module</p>
          </div>

          <hr/>

          <div className={styles.card}>
            <h2><a href="https://rnl.kaist.ac.kr">RNL Lab. </a></h2>
			<h3>2019.09 - 2019.12</h3>
            <p> - Developed both frontend and backend of the project for <a href="https://rnl.kaist.ac.kr">KAIST RNL website</a></p>
			<p> - Web outsourcing </p>
          </div>

          <hr/>
          
	  <div className={styles.card}>
            <h2>Puppypop</h2>
			<h3>2019.06 - 2019.08</h3>
            <p> - Managed entire process from Swift WebViewing to App Store uploading</p>
	        <p> - Added the push notification to iOS App</p>
			<p> - Consists of <code>Swift</code>, <code>React Native</code> </p>
          </div>

	</div>

	<div className={styles.workinfo}>
	  <div className={styles.headtitle}>Projects</div>
	  <div className={styles.p_card_pub}>
	    <a href="https://rnl.kaist.ac.kr">
	    <h2> RNL Website </h2>
		<p> - Radiation Materials and Nanomechanics lab website</p>
	    <p> - Developed this website using <code>React</code>, <code>Node</code>, <code>MongoDB</code> </p>
	    </a>
	  </div>
	  
	  <hr />

	  <div className={styles.p_card_private}>
	    <h2> Account Book </h2>
	    <p> - Developed this website using <code>React</code>, <code>Node</code>, <code>TypeScript</code>, <code>Mysql</code> </p>
	  </div>

	  <hr />
	  
	  <div className={styles.p_card_pub}>
	    <a href="https://github.com/chloe-kks/biseo">
	    <h2> SPARCS Biseo </h2>
	    <p> - Participated in DB, RESTful APIs, Socket API using <code>React</code>, <code>Node</code>, <code>MongoDB</code> </p>
	    </a>
	  </div>

	  <hr />

	  <div className={styles.p_card_private}>
	    <h2>KENS</h2>
		<p> - KAIST Educational Network System </p>
	    <p> - Developed the Network System with TCP/IP</p>
		<p> - Consists of <code>C++</code></p>
	  </div>

	  <hr />
	
	  <div className={styles.p_card_private}>
	    <h2>Pintos</h2>
		<p> - Operating system from Stanford</p>
	    <p> - Implemented thread scheduling, system call, virtual memory and file System</p>
        <p> - Consists of <code>C</code></p>
      </div>
	</div>

	<div className={styles.skillinfo}>
	  <div className={styles.headtitle}>Skills<p>(*:beginner)</p></div>
	  <div className={styles.skillcard}>
	    <h3>Programming Languages: </h3><p><code>C</code>, <code>Python</code>, <code>JavaScript</code>, <code>Java*</code></p>
	    <br/>
	    <h3>Web Frontend: </h3><p><code>React</code>, <code>HTML</code>, <code>CSS</code></p>
	    <br/>
	    <h3>Web Backend: </h3><p><code>Node</code>, <code>Spring Boot*</code></p>
	    <br/>
	    <h3>Tools: </h3><p><code>Docker</code>, <code>Git</code>, <code>Kubernetes</code>, <code>AWS*(EC2, EKS)</code>, <code>GCP*(GKE)</code></p>
	    <br/>
	    <h3>Basics: </h3><p><code>Linux</code>, <code>MongoDB</code>, <code>MySQL*</code>, <code>Vim</code></p>
	  </div>
	</div>

	<div className={styles.eduinfo}>
	  <div className={styles.headtitle}>Education</div>
	  <div className={styles.edu_card}>
	    <h2><a href="https://kaist.ac.kr">KAIST (Korea Advanced Institute of Science and Technology)</a></h2>
	    <h3>Bachelor's Degree, School of Computing, 2015 - present</h3>
	    <p> - <a href="https://line.me">Line Scholarships</a> (2018-2019) : for undergraduates in S.o.C </p>
	    <br/>
	    <p> - <a href="https://sparcs.org">SPARCS</a> (2016-2020) : developer and wheel (server manager)</p>
		<br/>
		<p> - <a href="https://instagram.com/kaist_cat_shelter">KAIST CAT SHELTER</a> (2018-2019) : founder and president </p>
	  </div>
	  <hr/>
	  <div className={styles.edu_card}>
	    <h2><a href="http://www.gsa.gen.hs.kr">GSA (Gwangju Science Academy)</a></h2>
	    <h3>High School Diploma, 2013 - 2014</h3>
		<p> - Early Graduation (2014) </p>
	  </div>
	</div>
      </main>

      <footer className={styles.footer}>
        <p
        >
	  2021 Created by Chloe Kim
        </p>
      </footer>
    </div>
  )
}
