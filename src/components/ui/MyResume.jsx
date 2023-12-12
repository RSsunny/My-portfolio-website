import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  heading3: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 8,
  },
  list: {
    marginLeft: 20,
  },
  listItem: {
    marginBottom: 4,
  },
});

const MyResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading1}>Rabius Sunny</Text>
        <Text style={styles.paragraph}>Web Developer</Text>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Contact Information</Text>
          <Text style={styles.paragraph}>Phone: 01755766682</Text>
          <Text style={styles.paragraph}>Email: sunnysharif154@gmail.com</Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Summary</Text>
          <Text style={styles.paragraph}>
            Results-driven Web Developer with proficiency in the MERN (MongoDB,
            Express.js, React, Node.js) stack. Adept at translating complex
            business requirements into scalable and high-performance web
            applications. Strong problem-solving skills and a passion for
            staying updated with emerging technologies.
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Education</Text>
          <Text style={styles.paragraph}>Bachelor of Science (BSc) Honors</Text>
          <Text style={styles.paragraph}>
            Your University Name, Your Graduation Year
          </Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Technical Skills</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              Languages: JavaScript (ES6+), HTML5, CSS3
            </Text>
            <Text style={styles.listItem}>
              Frontend: React.js, Redux, HTML, CSS, Bootstrap
            </Text>
            <Text style={styles.listItem}>Backend: Node.js, Express.js</Text>
            <Text style={styles.listItem}>Database: MongoDB</Text>
            <Text style={styles.listItem}>Version Control: Git, GitHub</Text>
            <Text style={styles.listItem}>
              Tools: Visual Studio Code, npm, Webpack
            </Text>
            <Text style={styles.listItem}>Other: RESTful APIs, JSON, AJAX</Text>
          </View>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Work Experience</Text>

          {/* Web Developer */}
          <View style={styles.section}>
            <Text style={styles.heading3}>
              Web Developer | Your Previous Company
            </Text>
            <Text style={styles.paragraph}>Location, Dates</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                Collaborated with cross-functional teams to develop and deploy
                web applications using the MERN stack.
              </Text>
              <Text style={styles.listItem}>
                Implemented responsive design principles to ensure optimal user
                experience across devices.
              </Text>
              <Text style={styles.listItem}>
                Integrated third-party APIs and services to enhance application
                functionality.
              </Text>
              <Text style={styles.listItem}>
                Conducted code reviews and provided constructive feedback to
                team members.
              </Text>
            </View>
          </View>

          {/* Junior Developer */}
          <View style={styles.section}>
            <Text style={styles.heading3}>
              Junior Developer | Another Company
            </Text>
            <Text style={styles.paragraph}>Location, Dates</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                Assisted in the development of dynamic and interactive web
                applications.
              </Text>
              <Text style={styles.listItem}>
                Participated in daily stand-ups and sprint planning meetings.
              </Text>
              <Text style={styles.listItem}>
                Troubleshooted and debugged issues to ensure smooth application
                performance.
              </Text>
              <Text style={styles.listItem}>
                Collaborated with UI/UX designers to implement design mockups.
              </Text>
            </View>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Projects</Text>

          {/* E-Commerce Platform */}
          <View style={styles.section}>
            <Text style={styles.heading3}>E-Commerce Platform</Text>
            <Text style={styles.paragraph}>
              Developed a full-stack e-commerce platform using MERN stack.
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                Implemented user authentication, product management, and order
                processing features.
              </Text>
              <Text style={styles.listItem}>
                Integrated secure payment gateways for seamless transactions.
              </Text>
            </View>
          </View>

          {/* Blogging Website */}
          <View style={styles.section}>
            <Text style={styles.heading3}>Blogging Website</Text>
            <Text style={styles.paragraph}>
              Created a blogging website with a user-friendly interface using
              React and Node.js.
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                Implemented a real-time comment system using MongoDB and
                WebSocket.
              </Text>
            </View>
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Certifications</Text>
          <Text style={styles.paragraph}>
            MERN Stack Web Development Certification
          </Text>
          <Text style={styles.paragraph}>Issuing Organization, Date</Text>
        </View>

        {/* Additional Information */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Additional Information</Text>
          <Text style={styles.paragraph}>GitHub: github.com/YourUsername</Text>
          <Text style={styles.paragraph}>
            LinkedIn: linkedin.com/in/YourLinkedInProfile
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text></Text>
      </View>
    </Page>
  </Document>
);

export default MyResume;
{
  /* <Text className="w-4/5  mx-auto p-6 bg-white text-black shadow-md rounded-md my-8">
<h1 className="text-2xl font-bold mb-4">Rabius Sunny</h1>
<p className="text-lg mb-4">Web Developer</p> */
}

{
  /* Contact Information */
}
{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
  <p>Phone: 01755766682</p>
  <p>Email: sunnysharif154@gmail.com</p>
</Text> */
}

{
  /* Summary */
}
{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Summary</h2>
  <p className="text-gray-700">
    Results-driven Web Developer with proficiency in the MERN
    (MongoDB, Express.js, React, Node.js) stack. Adept at translating
    complex business requirements into scalable and high-performance
    web applications. Strong problem-solving skills and a passion for
    staying updated with emerging technologies.
  </p>
</Text> */
}

{
  /* Education */
}
{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Education</h2>
  <p>Bachelor of Science (BSc) Honors</p>
  <p>Your University Name, Your Graduation Year</p>
</Text> */
}

{
  /* Technical Skills */
}
{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
  <ul className="list-disc ml-6">
    <li>Languages: JavaScript (ES6+), HTML5, CSS3</li>
    <li>Frontend: React.js, Redux, HTML, CSS, Bootstrap</li>
    <li>Backend: Node.js, Express.js</li>
    <li>Database: MongoDB</li>
    <li>Version Control: Git, GitHub</li>
    <li>Tools: Visual Studio Code, npm, Webpack</li>
    <li>Other: RESTful APIs, JSON, AJAX</li>
  </ul>
</Text> */
}

{
  /* Work Experience */
}
{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Work Experience</h2> */
}

{
  /* Web Developer */
}
{
  /* <Text className="mb-4">
    <h3 className="text-lg font-semibold mb-2">
      Web Developer | Your Previous Company
    </h3>
    <p>Location, Dates</p>
    <ul className="list-disc ml-6">
      <li>
        Collaborated with cross-functional teams to develop and deploy
        web applications using the MERN stack.
      </li>
      <li>
        Implemented responsive design principles to ensure optimal
        user experience across devices.
      </li>
      <li>
        Integrated third-party APIs and services to enhance
        application functionality.
      </li>
      <li>
        Conducted code reviews and provided constructive feedback to
        team members.
      </li>
    </ul>
  </Text> */
}

{
  /* <Text className="mb-4">
    <h3 className="text-lg font-semibold mb-2">
      Junior Developer | Another Company
    </h3>
    <p>Location, Dates</p>
    <ul className="list-disc ml-6">
      <li>
        Assisted in the development of dynamic and interactive web
        applications.
      </li>
      <li>
        Participated in daily stand-ups and sprint planning meetings.
      </li>
      <li>
        Troubleshooted and debugged issues to ensure smooth
        application performance.
      </li>
      <li>
        Collaborated with UI/UX designers to implement design mockups.
      </li>
    </ul>
  </Text>
</Text> */
}

{
  /* Projects */
}
{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Projects</h2> */
}

{
  /* <Text className="mb-4">
    <h3 className="text-lg font-semibold mb-2">
      E-Commerce Platform
    </h3>
    <p>
      Developed a full-stack e-commerce platform using MERN stack.
    </p>
    <ul className="list-disc ml-6">
      <li>
        Implemented user authentication, product management, and order
        processing features.
      </li>
      <li>
        Integrated secure payment gateways for seamless transactions.
      </li>
    </ul>
  </Text> */
}

{
  /* <Text className="mb-4">
    <h3 className="text-lg font-semibold mb-2">Blogging Website</h3>
    <p>
      Created a blogging website with a user-friendly interface using
      React and Node.js.
    </p>
    <ul className="list-disc ml-6">
      <li>
        Implemented a real-time comment system using MongoDB and
        WebSocket.
      </li>
    </ul>
  </Text>
</Text> */
}

{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Certifications</h2>
  <p>MERN Stack Web Development Certification</p>
  <p>Issuing Organization, Date</p>
</Text> */
}

{
  /* <Text className="mb-6">
  <h2 className="text-xl font-semibold mb-2">
    Additional Information
  </h2>
  <p>GitHub: github.com/YourUsername</p>
  <p>LinkedIn: linkedin.com/in/YourLinkedInProfile</p>
</Text>
</Text> */
}
