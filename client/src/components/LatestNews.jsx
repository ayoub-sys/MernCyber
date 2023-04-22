import React from 'react';
import Naavbar from './Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./card.css"
import Footer from './Footer';

const LatestNews = () => {
  return (
    <div>
        <Naavbar/>
        <CardGroup>
      <Card className='card'>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEjiBNCXvFYNrsQQZpT_6aMQ823h8QcUJVTOYOwcVURvQTVKooeX6z0BVo00hXbGCTsJQgJc6pDZAJ3MGUoMbwhQwn6La1QHMZJ58ffKWbV-AYQg9vm9lePbvDqt-JOYoyZvjMeCalA6JRjo9WxMO0cIUwpRq9eXvFHkiJa-1JpttDBCVmCLExMi1MBo/s728-e3650/critical-infra.png" />
        <Card.Body>
          <Card.Title>Iranian Government-Backed Hackers Targeting U.S. Energy and Transit Systems</Card.Title>
          <Card.Text>
          An Iranian government-backed actor known as Mint Sandstorm has been linked to attacks aimed at critical infrastructure in the U.S. between late 2021 to mid-2022.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEj4cPVWR3BRsd3fM0YaryqbBTMrj_gtMMMaycO4Sjgi8X4ly2eTX8yPE-p6KYZ6NV1Ptc34nz7a5CrJuMxlVziiquz8KoJQavCqTo31JcIwpQEvjSlSYkgOBauiJkpq5UB-WMDdFtg2ub-YPIVNDO61N8ZMvVe_kzcOD6YuQ_STH6SOPUPlmOWXkMtk/s728-e3650/router-hacking.png" />
        <Card.Body>
          <Card.Title>U.S. and U.K. Warn of Russian Hackers Exploiting Cisco Router Flaws for Espionage</Card.Title>
          <Card.Text>
          U.K. and U.S. cybersecurity and intelligence agencies have warned of Russian nation-state actors exploiting now-patched flaws...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEhFbN5aLsBak2MSCo2PghUtho5fltrjLIwjNcEG_6gTpMN-9qafUoPgeerUBVVen6ABVYyZrmgUpR0Gmpu5ic6W6-O01VCG0KWbWWw3doyolGcrygApgvU-ppwNZ1j8139kFgTApsi0-4tJYI6G3LnnwxvIFy9_JJyOiGM_bJjUAcSjql3gUHCZMwQX/s728-e3650/VM2.png" />
        <Card.Body>
          <Card.Title>Critical Flaws in vm2 JavaScript Library Can Lead to Remote Code Execution</Card.Title>
          <Card.Text>
          Critical Flaws in vm2 JavaScript Library Can Lead to Remote Code Execution
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br/>
    <CardGroup>
      <Card className='card'>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEg8OMixWmWR8H-2Z691qbD7aAdqzFre6eWA72L3EtD6CxwRQRdykZ4Kqh9cpIbtCuH3EjRsGgAKspQXCNtMq9m7uNkTeFr9fmEuz14VN3x6FmR53agzoJ4RFpnWdsLmhQ57Iaznsq909RAsiVkQDutAJbzKfKKNWY3821KH94nF-781fl3hbT37eqW2/s728-e3650/play.png" />
        <Card.Body>
          <Card.Title>YouTube Videos Distributing Aurora Stealer Malware via Highly Evasive Loader</Card.Title>
          <Card.Text>
          Cybersecurity researchers have detailed the inner workings of a highly evasive loader named "in2al5d p3in4er" (read: invalid printer) that's used to deliver the Aurora information stealer malware.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEgUxaKqaj7Cp0xRY0yAUfyKsBs0QSv4s9FTs091CQSGegtktzDYz8heWwAIaitybbeKrYYqwPx3M6GhFNO58dTQpjIxty5nc1DbqBZUqD3TXr-9phuAx74PyzlsQaNpWbOIvZOoEYRlufuTgEiMrfatCzaihT1--vAcdhrfLqxsEJFkk1b3QO10oA50/s728-e3650/malware-android.png" />
        <Card.Body>
          <Card.Title>Goldoson Android Malware Infects Over 100 Million Google Play Store Downloads</Card.Title>
          <Card.Text>
          A new Android malware strain named Goldoson has been detected in the official Google Play Store spanning more than 60 legitimate apps that collectively have over 100 million downloads.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEjbU1uIeqZ5Gq9hnoAu6cEg4S-t7SQ-ZWd7w1RM7j5IYXdddtyeti9l1KRYaF0iPULRjhyCdJjedQxfEhrx860sr8zxxT0GOzy8uP23UrktwNN1uKd2ZyDe_thg7i-K17xv-if2TkGVWDv40xL5yD6GpGP-A1xoya82bzTmqwT8qTijBKA2wlji78um/s728-e3650/hacking.png" />
        <Card.Body>
          <Card.Title>Iranian Hackers Using SimpleHelp Remote Support Software for Persistent Access</Card.Title>
          <Card.Text>
          The Iranian threat actor known as MuddyWater is continuing its time-tested tradition of relying on legitimate remote administration tools to commandeer targeted systems.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br/>
    <CardGroup>
      <Card className='card'>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEjRlOir9DzBKMNWlq8DxrNsVh8Uzue6X_3YsuM_1IbgcbtNk7k6dNHtN0Xk2QMvdpm8j7_i4uaWsppX9oxhvSJoxUZtjghuuog50cbKkLqXor2dl3OQ5uUu_V1kSfb2p0yPbMyqTLA0pG0RbQFB2ijgHPXuyLp_iSPcw7B7Lotshvxy042aywkfmfn_/s728-e3650/india.png" />
        <Card.Body>
          <Card.Title>Pakistani Hackers Use Linux Malware Poseidon to Target Indian Government Agencies</Card.Title>
          <Card.Text>
          The Pakistan-based advanced persistent threat (APT) actor known as Transparent Tribe used a two-factor authentication (2FA) tool used by Indian government agencies as a ruse to deliver a new Linux backdoor called Poseidon.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEhlj1rTUvFkHCFaaGswgeBRCd6V1Qrc97PQVLl63LvFl-S7hEqMB5ZXkNTI8KuTmBtM9cGvlK9XTDnPVto_3xQdVIExEuSxy8KbQpKOBV51hddruFiXukIVOmbKyatY0XmWVMr3VOnrBSr811QKtrAZyFmhygUzfC7Lmy-AZaoHdqg8FEzx0vZDzhH9/s728-e3650/lockbit-ransomware-macos.png" />
        <Card.Body>
          <Card.Title>LockBit Ransomware Now Targeting Apple macOS Devices</Card.Title>
          <Card.Text>
          Threat actors behind the LockBit ransomware operation have developed new artifacts that can encrypt files on devices running Apple's macOS operating system.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img style={{ "width":"450px","height":"200px" }} variant="top" src="https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEi7LRnoun6mvEbv-YKcDrpJwZ3cgn59JhBflZecaLsDmiV9KGoiO3-mNqKX3CQG1tHKKQWO7QqOmRtHHPpsXdLhzwcc9WqzXv0J30tKs0d99d-dgSyHMSRCVKN3I5EQfzBsHGBkPHZvVPtWSTzgBZAhNjTltXlujrp8FyOQEABNwyw5jfcEXR9gdVYF/s728-e3650/powershell-malware-hacking.png" />
        <Card.Body>
          <Card.Title>Vice Society Ransomware Using Stealthy PowerShell Tool for Data Exfiltration</Card.Title>
          <Card.Text>
          Threat actors associated with the Vice Society ransomware gang have been observed using a bespoke PowerShell-based tool to fly under the radar and automate the process of exfiltrating data from compromised networks.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br/>
    <Footer/>


    </div>
  )
}

export default LatestNews