angular.module('starter.services', [])

.factory('Questions', function() {
  // Might use a resource here that returns a JSON array
  var last = -1;
  // Some fake testing data
  var questions = [
    {
      question: "The two factors of creating Service Value are:",
      answer: "Service Utility and Service Warranty",
      options: ["Service Utility and Service Stability","Service Stability and Service Affordability","Service Affordability and Service Warranty","Service Utility and Service Warranty"],
      description: "Service Utility and Service Warranty are the two factors that lead to Service Value.\nKey Takeaway: Before an IT organization can assign a cost for its services it has to establish a value for those services. Service Utility, the services positive impact on the business operations, and Service Warranty, how well the positive impact is delivered, together enable the organization to establish a value for the service"
    },
    {
      question: "A Service Package contains all of the following except:",
      answer: "Service Strategy Packages",
      options: ["Service Level Packages","Core Services Package","Supporting Services Package","Service Strategy Packages"],
      description: "A Service Package contains the Core Services Package, any Supporting Services Packages, and the Service Level Packages. Service Strategy Packages is not a valid ITIL term.\nKey Takeaway: The Service Package is the detailed description of the collection of services available for delivery to customers. The Core Services Package is the heart of the service, Supporting Services Packages help differentiate the Core Services, and Service Level Packages define the Service Utility and Service Warranty."
    },
    {
      question: "You are the owner of an internet services provider (ISP) company. You have just launched a new Service Package that includes: a) internet connection and email; b) SPAM filtering; and c) a guaranteed download speed. The contents of the service package are defined as:",
      answer: "a) Core Service Package; b) Supporting Services Package; and c) Service Level Package",
      options: ["a) Service Portfolio; b) Portfolio Enhancements; and c) Portfolio Guarantee","a) Service Package Contents; b) Package Enhancements; and c) Package Guarantee","a) Core Service Package; b) Supporting Services Package; and c) Service Level Package","a) Core Portfolio; b) Core Portfolio Enhancements; and c) Core Portfolio Guarantee"],
      description: "For this example the internet connection is the Core Service Package, the SPAM filtering is the Supporting Services Package, and the guaranteed download speed is the Service Level Package.\nKey Takeaway: Combined, the Core Service Package, the Supporting Services Package, and the Service Level Package comprise the Service Package. As you would expect, this Service Package contains a variety of components (e.g. shared services, software, hardware, infrastructure, etc.). This approach helps reduce costs and minimize complexity."
    },
    {
      question: "Which of the following processes is not included in the Service Strategy lifecycle phase?",
      answer: "Package Delivery Management",
      options: ["Demand Management","Service Portfolio Management","Package Delivery Management","Financial Management"],
      description: "Demand Management, Service Portfolio Management, and Financial Management comprise the Service Strategy lifecycle phase. Package Delivery Management is not a valid ITIL term\nKey Takeaway: Demand Management, Service Portfolio Management, and Financial Management together are used to facilitate a customers value realization of the services being provided to customers. Collectively the information can be used to drive IT investment decisions. - See more at:"
    },
    {
      question: "The main goal of _________ is/are to provide IT Service Management with strategies for future initiatives and investment management to ensure an effective portfolio of services are being delivered:",
      answer: "Service Portfolio Management",
      options: ["Demand Management","Service Portfolio Management","Service Stategy Processes","Financial Management"],
      description: "The basic goal of Service Portfolio Management is to provide IT Service Management with strategies for future initiatives and investment management guidance to ensure an effective portfolio pf services are being delivered\nKey Takeaway: Additonally,Service Portfolio Management help identify the value the business gains from IT Services,assist with supporting and improving services,and keeping track of all services regardless of status (e.g current,planned,and retired)"
    },
    {
      question: "Which of the following is not a category of the Service Portfolio?",
      answer: "Service Requirements",
      options: ["Retired Services","Service Pipeline","Service Catalogue","Service Requirements"],
      description: "Service Requirements is not a category in the Service Portfolio.\nKey Takeaway: The Service Pipeline (proposed and planned services), the Service Catalogue (active services), and Retired Services (no longer available) together make up the Service Portfolio. As expected, this information may come from different places within the organization so its important to carefully manage and control this information."
    },
    {
      question: "TTB, GTB, and RTB are all categories of:",
      answer: "Service Investments",
      options: ["Service Investments","Services Pipeline","Services Catalogue","Services Requirements"],
      description: "Transform the Business (TTB), Grow the Business (GTB), and Run the Business (RTB) are all categories of Services Investments.\nKey Takeaway: Transform the Business investments are for new capabilities or new markets, Grow the Business investments are designed to help grow the current business, and Run the Business (RTB) are investments to keep the current services operating. "
    },
    {
      question: "The three fundamental Financial Management activities for IT Services are:",
      answer: "Funding, IT Accounting, and Chargeback",
      options: ["Funding, IT Accounting, and Chargeback","Investments, Accounting & Finance, and Chargeback","Cost Elements, Cost Types, and Cost Units","Funding, IT Accounting, and Demand Modeling"],
      description: "Funding, IT Accounting, and Chargeback are the three fundamental Financial Management activities for IT Services.\nKey Takeaway: These three activities ensure that future funding requirements are predictable, that the organization can account for all its spending, and optionally to charge customers for the IT Services they use."
    },
    {
      question: "The main goal of _________ is/are to foster understanding of a customer\'s requirements for Services and determine what is needed to satisfy the requirements:",
      answer: "Demand Management",
      options: ["Demand Portfolio Management","Service Portfolio Management","Demand Management","Requirements Management"],
      description: "The main goal of Demand Management is to foster understanding of a customers requirements for Services and determine what is needed to satisfy the requirements.\nKey Takeaway: Additionally, Demand Management is designed to identify and analyze the Patterns of Business Activity (PBA) that drives demand, and to use methods to effectively manage the demand itself. Ideally Demand Management will eventually be able to forecast the demand based on patterns in the business activities."
    },
    {
      question: "Fit for use is related to ____________ and fit for purpose is related to_____________.",
      answer: "Service Warranty, Service Utility",
      options: ["Service Warranty, Service Utility","Service Utility, Service Warranty","Service Value, Service Utility","Service Warranty, Service Value"],
      description: "Fit for use is related to Service Warranty and fit for purpose is related to Service Utility.\nKey Takeaway: Before an IT organization can assign a cost for its services it has to establish a value for those services. Service Warranty, how well the positive impact is delivered, and Service Utility, the services positive impact on the business operations, together enable the organization to establish a price for the service."
    },
    {
      question: "Why would an organization use Service Portfolio Management?",
      answer: "To help define the value IT services provide to the business",
      options: ["To reduce the number of RFCs","To help define the value IT services provide to the business","To clarify supplier contract provisions","Service Portfolio Management is not a valid ITIL process"],
      description: "An organization would use Service Portfolio Management to help define the value IT services provide to the business\nKey Takeaway: Service Portfolio Management defines the reasons why (value) a customer would buy the services, why they should be procured for their group, how pricing for the services are defined, and how resources are aligned to meet the demands of the services. Depending on the customers it has, it is possible for a service provider to have multiple Service Portfolios."
    },
    {
      question: "The categories of a Service Portfolio are:",
      answer: "Service Pipeline, Service Catalogue, and Retired Services",
      options: ["Service Pipeline, Service Catalogue, and Discontinued Services","Service Pipeline, Service Catalogue, and Retired Services","Service Value, Service Utility, and Service Warranty","Service Warranty, Service Value, and Service Management"],
      description: "The categories of a Service Portfolio are Service Pipeline, Service Catalogue, and Retired Services.\nKey Takeaway: Before an IT organization can assign a cost for its services it has to establish a value for those services. Service Warranty, how well the positive impact is delivered, and Service Utility, the services positive impact on the business operations, together enable the organization to establish a price for the service. The Service Pipeline (proposed and planned services), the Service Catalogue (active services), and Retired Services (no longer available) together make up the Service Portfolio. As expected, this information may come from different places within the organization so its important to carefully manage and control this information."
    },
    {
      question: "Which of the following is the correct set of methods for Service Portfolio Management?",
      answer: "Define, Analyze, Approve, and Charter",
      options: ["Define, Analyze, Approve, and Control","Define, Analyze, Approve, and Charter","Definition, Analysis, Approvals, and Consolidation","Define, Analyze, Approve, and Consolidate"],
      description: "Define, Analyze, Approve, and Charter is the correct set of methods for Service Portfolio Management.\nKey Takeaway: Since Service Portfolio Management is a dynamic process it requires a set of methods to ensure senior management has the right information to make decisions. Define assesses and validates the portfolio data, Analyze helps ensure with business alignment and value through proper prioritization and demand, Approve ensures the needed services are authorized for use in the final portfolio, and Charter keeps track of what services are being implemented and the investment made in services."
    },
    {
      question: "In the process of performing Service Portfolio Management you realize there are several services that are redundant. What would be your decision outcome?",
      answer: "Replace",
      options: ["Renew","Retain","Refactor","Replace"],
      description: "When there are redundant services you should replace them\nKey Takeaway: There are six outcomes of an analysis of service portfolios: Renew (meets functional needs but falls short in technology), Replace (overlapping, redundant), Retain (working well and aligned to business), Refactor (needs clarity of focus or primary functional role), Retire (fail to meet the needs both technically and functionally), and Rationalize (needs standardization or consolidation)."
    },
    {
      question: "What role does the CIO play in Service Portfolio Management when refreshing the portfolio?",
      answer: "Monitor, measure, reassess, and rebalance investments",
      options: ["Approves new team structure","Defines scope","Monitor, measure, reassess, and rebalance investments","Approves RACI"],
      description: "The CIO monitors, reassess, and rebalances the investments when refreshing the portfolio.\nKey Takeaway: Refreshing the portfolio serves to ensure there is balance between the amount of investment and the cost for those investments. A refresh process is generally continuous but can also be triggered by other events such as mergers and acquisitions, changes in the competitive landscape, changes in internal or external legal, compliance, or legislative demands."
    },
    {
      question: "Which of the following is not an objective of Service Design?",
      answer: "Verify new Services have funding",
      options: ["Turn strategic goals into Services and Service Portfolios","Verify new Services have funding","Take a holistic approach to designing Services","Ensure standards are used when designing Services and Processes"],
      description: "Verifying new Services have funding is not an objective of Service Design.\nKey Takeaway: When creating new Services or modifying existing ones the most important factor is to support business needs. Its important that every new Service developed is compared to the existing Service Portfolio to ensure it will integrate and interface with the other Services."
    },
    {
      question: "Which Service Design process includes the planning and reporting of SLAs and the review of service achievements?",
      answer: "Service Level Management",
      options: ["Service Level Management","Operational Level Agreement","Service Level Agreement","Service Catalogue"],
      description: "Service Level Management is the Service Design process that includes planning and reporting of SLAs and the review of service achievements.\nKey Takeaway: In addition, Service Level Management includes the process of planning, coordinating, documenting, agreeing, monitoring, and reporting of SLAs. It also is tasked with the ongoing review of service achievements to ensure that the quality of services being provided are cost-justifiable. The key activities of Service Level Management are designing the SLA frameworks, negotiating Service Level Requirements for new and changed services, monitoring service achievements through the SLAs, measuring and improving customer satisfaction, producing service reports, and performing service reviews."
    },
    {
      question: "What is an agreement between internal groups designed to support the IT service provider\'s service delivery?",
      answer: "Operational Level Agreement (OLA)",
      options: ["Operational Level Agreement (OLA)","Service Level Agreement (SLA)","Service Level Requirement (SLR)","Underpinning Contract"],
      description: "Operational Level Agreement (OLA) is an agreement between internal groups designed to support the IT service providers service delivery.\nKey Takeaway: Service Level Management is responsible for negotiating SLAs and OLAs whereas Supplier Management is responsible for negotiating UCs with the external suppliers. Its important for there to be communication between the two processes to ensure the UCs align to and support the SLAs. -:"
    },
    {
      question: "Your employer is looking to improve IT Services the company already delivers by adopting ITIL. Which document should be created first?",
      answer: "Service Catalogue",
      options: ["Operational Level Agreement (OLA)","Service Level Agreement (SLA)","Service Level Requirement (SLR)","Service Catalogue"],
      description: "The Service Catalogue is the first document that should be created by a company that is already delivering IT Services but wants to adopt the ITIL framework.\nKey Takeaway: The Service Catalogue defines the IT Services that are being provided and will be used as a baseline when comparing what is being delivered to the customers requirements. This will expose any gaps that can be filled and any duplicate service"
    },
    {
      question: "What is the most important aspect of a Service Level Agreement (SLA)?",
      answer: "Measurable",
      options: ["Clear Scope","Measurable","Security","Reliability"],
      description: "The most important aspect of a Service Level Agreement (SLA) is that it is measurable.\nKey Takeaway: A Service Level Agreement (SLA) is important to ensure that all parties understand its contents. Avoiding unnecessary language and technical details helps reduce confusion. With joint understanding the SLA can be used to manage quality and not just for determining penalties for non-performance. This puts the SLA in the middle of fostering a strong relationship between the IT Service provider and customers."
    },
    {
      question: "Your supplier agreement calls for an informal combination of insourcing and outsourcing suppliers. Which type of supplier agreement is this?",
      answer: "Co-sourcing",
      options: ["Application Service Provision","Multi-Sourcing","Partnering","Co-sourcing"],
      description: "Co-sourcing is the supplier agreement that calls for an informal combination of insourcing and outsourcing suppliers.\nKey Takeaway: Co-sourcing is one of five different types of supplier agreements including co-sourcing, partnering or multi-sourcing, business process outsourcing, knowledge process outsourcing, and application service provision."
    },
    {
      question: "Which perspective of ITSM takes into consideration the \"soft\" side of IT?",
      answer: "People Perspective",
      options: ["Partners/Suppliers Perspective","Products/Technology Perspective","People Perspective","Process Perspective"],
      description: "The People Perspective of ITSM takes into consideration the \"soft\" side of IT.\nKey Takeaway: The \"soft\" side of IT includes the people side, including IT staff members, customers, and other stakeholders to ensure they have the skills needed to do their job. The Partner/Supplier Perspective is focused on the relationship with partners and suppliers; the Products/Technology Perspective considers software, hardware, IT services, tools, etc.; and the Process Perspective is focused on the overall delivery of process-driven services -"
    },
    {
      question: "\"A set of specialized organizational capabilities for providing value to customers in the form of services\" is the official definition of:",
      answer: "ITSM",
      options: ["ITIL","ITSM","RACI","Service Quality"],
      description: "\"A set of specialized organizational capabilities for providing value to customers in the form of services\" is the official definition of IT Service Management.\nKey Takeaway: There are many other definitions for ITSM but in essence they all include a component for the description of services required to deliver and support IT services in support of technology or products required by the business. It also includes a description of roles and responsibilities for the people involved and provides a means to manage external suppliers or partners. Regardless, all of these factors are constantly adjusting along with the needs of the customer."
    },
    {
      question: "In general, the benefits of IT Service Management (ITSM) include ensuring the IT services are aligned with the needs of the organization, that there are integrated and centralized processes, and the quality of the service is continuously monitored and improved. Which of the follow is not generally a benefit of ITSM?",
      answer: "Satisfies the pre-requisite for an official ITSM Maturity Assessment",
      options: ["Metrics are collected to demonstrate how well the IT service is being delivered","Helps Cost-Justify the services","Satisfies the pre-requisite for an official ITSM Maturity Assessment","Ensures that there are clear roles and responsibilities in provisioning the service"],
      description: "Satisfies the pre-requisite for an official ITSM Maturity Assessment is not a benefit of IT Service Management (ITSM).\nKey Takeaway: Unlike a Capability Maturity Model (CMM/CMMI) appraisal from the Software Engineering Institute, there are no organizational assessments or certifications an organization can achieve as a result of implementing ITSM. Certifications are achieved on an individual person basis as a result of knowledge and capabilities of ITSM."
    },
    {
      question: "ITIL stands for the Information Technology Infrastructure Library. Which are the five volumes that comprise ITIL?",
      answer: "Service Strategy, Service Design, Service Transition, Service Operation, & Continual Service Improvement",
      options: ["Service Strategy, Service Catalog Management, Service Transition, Service Operation, & Continual Service Improvement","Service Strategy, Service Design, Service Transition, Service Operation, & Service Continuity Management","Service Strategy, Service Design, Service Transition, Service Security, & Continual Service Improvement","Service Strategy, Service Design, Service Transition, Service Operation, & Continual Service Improvement"],
      description: "Service Strategy, Service Design, Service Transition, Service Operation, & Continual Service Improvement comprise the five volumes\nKey Takeaway: The five volumes that comprise ITIL are just one of several sources that clients should use to establish best practices for IT services. ITIL should be used hand-in-hand with other frameworks such as COBIT and the CMMI, as well as established standards such as ISO 20000 and BS 15000."
    },
    {
      question: "A means of delivering value to Customers by facilitating outcomes customers want to achieve without the ownership of specific costs or risks is the definition for which of the following?",
      answer: "Services",
      options: ["Services","Process","Functions","Utopia"],
      description: "Services is defined as a means of delivering value to Customers by facilitating outcomes customers want to achieve without the ownership of specific costs or risks.\nKey Takeaway: Was it really tough not to select D since the idea of helping drive valuable outcomes for customers would be an ideal, utopian world? Being able to understand the concept of Service is very important. Consider the difference between planning your own wedding or hiring a wedding planner. Sure, you could plan your own wedding but it\'s not what you do on a day-to-day basis whereas that\'s what a wedding planner does as a service to its customers. When you judge the quality of the service you are going to measure your satisfaction based on the whole event and not just how good the band was. The band is just one component of many and the entire event is the service."
    },
    {
      question: "You were on a conference call on Tuesday where your boss stated that you will be leading the development of a new Service. He mentioned that you will be adopting a Service oriented approach. What did your boss mean by that?",
      answer: "Effective communication, the IT organization will be \'transparent\', we maintain appropriate response times for inquiries, and we will identify issues in a proactive manner.",
      options: ["I don\'t have a clue","We will use software as a service (SaaS) and cloud computing to drive customer satisfaction","Effective communication, the IT organization will be \'transparent\', we maintain appropriate response times for inquiries, and we will identify issues in a proactive manner.","We will establish formal arrangements with an external organization that will be responsible for delivering high customer-focused services."],
      description: "Effective communication, IT organizational transparency, maintaining appropriate response times for inquiries, and identifying issues in a proactive manner all contribute to taking a Service oriented approach.\nKey Takeaway: When we develop and deliver a service it is imperative that we take a holistic view. Consider the issues if an IT organization only focused on the hardware aspect of the environment and didn\'t take into consideration the software or the needs of the users or customers. How do you think that would impact your customer satisfaction? The net/net is that a broader view is required in order to ensure you are delivering a quality service."
    },
    {
      question: "Who is responsible for ensuring the process fits the desired purpose?",
      answer: "Process Owner",
      options: ["Process Owner","Service Owner","Process Manager","Internal Service Provider"],
      description: "A Process Owner is responsible for ensuring the process fits the desired purpose.\nKey Takeaway: Not only is the Process Owner responsible for the process, they are accountable for the outputs of the process. The Process Owner differs from the Service Owner in that the Service Owner is held responsible and accountable for the actual delivery of the IT Service. The Service Owner is also responsible for ensuring that the process is continually improving and changes to the process is managed effectively. There may be one or more Process Managers responsible for the operational aspects of a process. The Process Managers report into the Process Owner."
    },
    {
      question: "When defining a process it is important to consider the following?",
      answer: "Physical and behavioral aspects",
      options: ["Process owner and process manager relationships","Timeline for implementation","IT operational management demands","Physical and behavioral aspects"],
      description: "When defining a process it is important to consider both the physical and behavioral aspects that are present.\nKey Takeaway: The physical aspects of a process (process documentation, process owner, process activities, etc.) normally garner the most attention but it is important to also consider the intangible behavioral aspects (e.g. communication needs, training requirements, etc.) within an organization when developing processes. This can be accomplished by making sure all the key stakeholders are involved in the design process."
    },
    {
      question: "What purpose does an IT Function serve?",
      answer: "To define the roles and responsibilities required for IT Services design, delivery, and management.",
      options: ["It acts as the \'glue\' within ITSM","Determines the importance of a Service","To rhyme with conjunction","To define the roles and responsibilities required for IT Services design, delivery, and management."],
      description: "An IT Function defines the roles and responsibilities required for IT Services design, delivery, and management\nKey Takeaway: The logical grouping is needed within Service Operation to ensure a steady state operation can be maintained. An IT Function ensures that each person knows their own role in the overall strategy of the team. Consider what would happen to a football team if the players didn\'t know what to do or where to go for each play? It would be utter chaos. The same applies to an IT service organization. An IT Function is the \'play book\' for the team."
    },
    {
      question: "The RACI model is at the core of ensuring the integration of Processes and Functions. What does RACI abbreviation stand for?",
      answer: "Responsibility, Accountability, Consult, & Inform",
      options: ["Responsive, Accountable, Coordinated, & Informed","Responsible, Actionable, Coordinated, & Integrated","Responsibility, Accountability, Consult, & Inform","Reasonable, Accommodating, Cooperative, & Inquisitive"],
      description: "The RACI model is at the core of ensuring the integration of Processes and Functions. The RACI abbreviation stands for Responsibility, Accountability, Consult, & Inform.\nKey Takeaway: The RACI Model is a helpful tool to document the roles and responsibilities of the different activities across the IT Functions. Displayed in the form of a table whereas the columns define the Functions and the rows define the activities within the Function. Where the cells intersect an R, A, C, and/or I is entered. Viewed by rows, it is possible to have the same letter in more than one cell to denote a shared responsibility. The exceptions to this are: only one \"A\" is allowed in a row (otherwise there would be confusion over who is accountable); and at least one \"R\" is required in a row (a Function needs to be responsible for each activity so work gets done)."
    },
    {
      question: "How many phases are there in the Service Lifecycle?",
      answer: "5",
      options: ["4","5","6","4 Plus 1 Optional"],
      description: "There are five phases in the Service Lifecycle.\nKey Takeaway: The same five volumes that comprise the Information Technology Infrastructure Library (ITIL) are what comprise the Service Lifecycle: Service Strategy, Service Design, Service Transition, Service Operation, and Continual Service Improvement. Keep in mind that there is a holistic integration of all phases and each phase will affect the other. The result is a continuous cycle"
    },
    {
      question: "In which phase of the Service Lifecycle is there a focus on designing, developing, and implementing service management?",
      answer: "Service Strategy",
      options: ["Service Strategy","Service Design","Service Transition","Service Operation"],
      description: "Focusing on service management design, development, and implementation is one objective of Service Strategy.\nKey Takeaway: In addition, Service Strategy is focused on enabling the IT organization\'s ability to manage costs and risks in the service portfolio and establishing the IT organization\'s strategic objectives. By accomplishing all of these goals, the IT organization will be positioned to support the company\'s growth and help drive overall improvements and efficiencies."
    },
    {
      question: "What is the relationship between the SCD and a CMS?",
      answer: "The SCD is integrated into the CMS",
      options: ["Trick question, there is no relationship","The CMS feeds into the SCD","The SCD is integrated into the CMS","Configuration items are missing in both the SCD and CMS"],
      description: "The relationship between the Supplier and Contract Database (SCD) and the Configuration Management System (CMS) is that the SCD should be integrated into the CMS.\nKey Takeaway: By integrating the SCD with the CMS it provides the ability to document the details about the suppliers and the contracts with the service types and products from each of the suppliers. Additionally, relationships with Configuration Items (CIs) is also recorded."
    },
    {
      question: "Congratulations! You have landed a new job as manager of application development for a major insurance company. You need to get a new laptop for yourself. Where do you find the scope of service offerings within IT?",
      answer: "Service Catalogue",
      options: ["Service Catalogue","Service Menu","Catalogue of Services","Menu of Services"],
      description: "The Service Catalogue provides the scope of services offered by the various groups within IT.\nKey Takeaway: Service Catalogues are maintained as part of the Service Catalogue Management process. The Service Catalogue Management process is the single source of information on what services are available and who has the authority to the Service Catalogue. If there were no Service Catalogues then the functions the management of Service Portfolios, Service Level Agreements, and IT budgets would be made more challenging."
    },
    {
      question: "What is the result of too few IT resources and capabilities?",
      answer: "Decreased performance",
      options: ["Increased cost","Decreased cost","Decreased performance","Increased performance"],
      description: "Too few IT resources and capabilities results in decreased performance\nKey Takeaway: In contrast, too many IT resources and capabilities will increase costs. Capacity Management is a key function with an IT organization and is responsible for ensuring the correct amount of capacity is maintained at the correct location when needed for each customer for the correct cost."
    },
    {
      question: "Who is responsible for providing oversight to performance and capacity monitoring activities?",
      answer: "Capacity Manager",
      options: ["Performance and Monitoring Team","Capacity Manager","Capacity and Performance Tuning Manager","Performance and Monitoring Manager"],
      description: "The Capacity Manager is responsible for providing oversight to performance and capacity monitoring.\nKey Takeaway: The Capacity Manager needs to be the sort of person who is technically aware but is also familiar with the needs of the business, can analyze information, and interact in a consultative manner with others."
    },
    {
      question: "The main goal of Availability Management is to:",
      answer: "Ensure the level of service availability meets the agreed upon needs of the customer",
      options: ["Ensure the level of service availability meets the agreed upon needs of the customer","Ensure the IT organization will not have a operational failure","Document the availability service levels","Ensure everyone in IT has water and sodas available at all times"],
      description: "The main goal of Availability Management is to ensure the level of service availability meets the agreed upon needs of the customer.\nKey Takeaway: How effective Availability Management is can have a direct impact on a customer\'s happiness and satisfaction with IT Services. If there is an outage in the middle of the work day or during an urgent issue then the customer could be very unhappy. However, if the outage occurs over the weekend or over a holiday then there would be minimal impact on their happiness."
    },
    {
      question: "What role does Availability play with Incident Management:",
      answer: "To minimize the duration and effect of incidents",
      options: ["To define the relationship between MTBSI and MTRS","To minimize the duration and effect of incidents","To increase the MTBF","To decrease the MTBF"],
      description: "The role of Availability Management with Incident Management is to minimize the duration and effect of incidents.\nKey Takeaway: When an incident occurs Availability Management must ensure the business operations are brought up and functional as soon as possible. There are several Availability Management metrics: mean time between failures (MTBF); mean time to restore service (MTRS); and mean time between system incidents (MTBSI). If there are is a high ratio between MTBF to MTBSI it means there are a lot of small issues whereas a low ratio between MTBF and MTBSI means there just a few major issues."
    },
    {
      question: "Disaster Recovery Planning is another term for:",
      answer: "IT Service Continuity Management",
      options: ["IT Service Recovery Management","IT Service Continuity Management","IT Service Recovery and Continuity Management","CYA"],
      description: "Disaster Recovery Planning is another term for IT Service Continuity Management.\nKey Takeaway: To recover during a disaster requires a separate system. As part of overall Business Continuity Management, IT Service Continuity Management is tasked with ensuring the IT infrastructure and services are recovered within the agreed to amount of time. IT Service Continuity Management takes a broad view in this respect and covers everything from hardware, software, IT staff, telephone and office services, utilities, and all other aspects to permit the business to continue or restore operations. -"
    },
    {
      question: "Performing a Business Impact Analysis (BIA) is an activity of:",
      answer: "IT Service Continuity Management",
      options: ["IT Service Continuity Management","IT Recovery Management","IT Business Continuity Management","Recovery and Risk Reduction Measures"],
      description: "Performing a Business Impact Analysis (BIA) is an activity of IT Service Continuity Management\nKey Takeaway: The purpose of the Business Impact Analysis (BIA) is to identify mission critical business processes and functions, identify any damage or loss caused by a interruption, identify any escalations as a result of damage or loss, determine the resources needed to restore mission critical processes, and determine the time frames for both minimal and full recovery."
    },
    {
      question: "Confidentiality, integrity, and availability are all terms associated with:",
      answer: "Information Security Management",
      options: ["IT Service Recovery Management","IT Service Continuity Management","Information Security Management","Business Operations Data Targets (BODT)"],
      description: "Confidentiality, integrity, and availability are all terms associated with Information Security Management.\nKey Takeaway: Information Security Management has to ensure that security is managed across all IT Service Management areas. Specifically, Information Security Management is tasked with making sure information is protected, accurate, complete, and available. Information Security Management should be a contributing consideration of an organization\'s governance model."
    },
    {
      question: "Application sizing, modeling, and demand management are all considerations for:",
      answer: "Capacity Management",
      options: ["Service Level Management","Capacity Management","Service Catalogue Management","Supplier Management"],
      description: "Application sizing, modeling, and demand management are all considerations for Capacity Management.\nKey Takeaway: Application sizing is an activity designed to determine the hardware or network capacity needed; modeling is used to forecast the infrastructure\'s behavior under a set of conditions; and demand management are the short-term responses to meet current demand. Additional considerations are performance monitoring, tuning, storage of capacity management data, capacity planning, and reporting."
    },
    {
      question: "Supplier Service Improvement Plans (SSIP) are used to:",
      answer: "Document improvement plans agreed to between service providers and suppliers",
      options: ["Document improvement plans agreed to between service providers and suppliers","Collect feedback from suppliers","Provide input to a supplier and contract review","Document the co-sourcing arrangements"],
      description: "Supplier Service Improvement Plans are used to document improvement plans agreed to between service providers and suppliers.\nKey Takeaway: Supplier Survey Reports are used to collect feedback from anyone who works directly with suppliers on a day-to-day basis so the information can be reviewed to ensure the services are of the quality agreed to. Supplier and Contract Performance Reports are primarily used as in reviews with suppliers when discussing contracts and quality of service."
    },
    {
      question: "Which of the following is not a sub-process of Capacity Management?",
      answer: "Supplier Capacity Management",
      options: ["Business Capacity Management","Service Capability Management","Component Capacity Management","Supplier Capacity Management"],
      description: "Supplier Capacity Management is not a sub-process of Capacity Management. Supplier Capacity Management is not a valid ITIL term.\nKey Takeaway: The three sub-processes of Capacity Management are Business Capacity Management (ensures capacity meets future business needs), Service Capacity Management (manages on-going service delivery per SLAs), and Component Capacity Management (manages the individual components of the IT infrastructure. All three of these sub-processes consolidate information and feed it into both Service Level Management and Financial Management."
    },
    {
      question: "Which is a benefit of a Knowledge Management System?",
      answer: "Organizational growth and maturity",
      options: ["Having all users use the system","Wisdom","Organizational growth and maturity","Accurate chargeback records"],
      description: "Organizational growth and maturity is a benefit of using a Knowledge Management System\nKey Takeaway: The additional benefits and organization can expect to realize are greater reuse and more effective use of resources. As with most system implementations there are challenges expected including trying to get users to use the system, having adequate time to enter information into the system, keeping the information current, and ensuring it is flexible and scalable to meets the current and future needs of the organization."
    },
    {
      question: "Which lifecycle phase is focused on the period between Service Design and Service Operation?",
      answer: "Service Transition",
      options: ["Service Transition","Change Management","Service Validation and Testing","Knowledge Management"],
      description: "Service Transition is the lifecycle phase that is focused on the period between Service Design and Service Operation.\nKey Takeaway: This is an important phase because it any functional or technical errors that slip through will have a much greater impact to the infrastructure and/or customer. As result, there will normally be a much higher cost associated with fixing the problem once it is in operation. Service Transition also ensures that any new or changed services meet the customer\'s requirements, works to reduce differences in actual versus forecast costs, and builds, tests, and implements releases into operation with minimal impact to the organization."
    },
    {
      question: "A Configuration Management Database:",
      answer: "Stores configuration items (CIs)",
      options: ["Is created by Problem Management","Is used by Problem Management","Stores configuration items (CIs)","Also referred to as the Known Error Database"],
      description: "A Configuration Management Database stores configuration items (CIs).\nKey Takeaway: The CMDB also shows the relationship between CIs as well as provides a logical model of the IT infrastructure. Configuration Items can include software, documentation, and attributes of the CIs such as the amount of disk space on a computer. Items that are not controlled by Change Management wouldn\'t normally go into the CMDB."
    },
    {
      question: "Configuration Management activities include all of the following except:",
      answer: "Security",
      options: ["Management & Planning","Security","Identification","Reporting"],
      description: "Configuration Management activities do not include Security.\nKey Takeaway: Management & Planning is at the center of Configuration Management. Additional activities include Identification (selection, labeling and registration of CIs), Status Accounting (reporting of current and historical data for each CI), Reporting, Verification & Audit (integrity of the CI in CMDB), and Control (only authorized CIs are in the CMDB)"
    },
    {
      question: "A server upgrade is planned for the weekend. Which Service Transition process below would be used to ensure standardized methods and procedures are used?",
      answer: "Change Management",
      options: ["IT Service Continuity Management","Continual Service Improvement","Knowledge Management","Change Management"],
      description: "Change Management is the Service Transition process that would be used to ensure standardized methods and procedures are used during the server upgrade\nKey Takeaway: Knowledge Management, the only other Service Transition process listed as a possible answer, is focused on ensuring the organization has quality data for decision making. Change Management ensures changes are controlled and follow a defined set of procedures to minimize the impact of change-related incidents."
    },
    {
      question: "Which of the following changes is pre-approved and does not require an RFC?",
      answer: "Standard Change",
      options: ["Standard Change","Normal Change","Emergency Change","VIP Change"],
      description: "A Standard Change is pre-approved and does not require a Request for Change (RFC).\nKey Takeaway: A Standard Change is a low risk change that is common (e.g. a new employee\'s laptop), which is typically captured as a Service Request. A Normal Change is one that follows all the steps of the process and is assessed by the Change Advisory Board (CAB). An Emergency Change is one that needs to be implemented urgently; however, there is still a process to handle this type of request."
    },
    {
      question: "Raised, reason, return, risks, resources, responsible, and relationship are commonly referred to as:",
      answer: "7 Rs of Change Management",
      options: ["7 Rs of Change Management","7 Rs of Service Improvement","Seven Rs of Configuration Management","5 Rs short of a dozen"],
      description: "Raised, reason, return, risks, resources, responsible, and relationship are commonly referred to as the 7 Rs of Change Management.\nKey Takeaway: The 7 Rs refer to questions that must be answered before any change is made. They ask who raised the change, what\'s the reason for the change; what return is required for the change, what risks are there, what resources are needed for the change, who is responsible for building, testing and installing the change, and what (if any) relationship does this change have with other changes?"
    },
    {
      question: "What would you refer to if you wanted to measure the effectiveness and efficiency of the Change Management process?",
      answer: "KPIs",
      options: ["CMDB","CAB","KPIs","EIEIO"],
      description: "You would refer to the Key Performance Indicators (KPIs) of Change Management if you wanted to measure the effectiveness and efficiency of the Change Management process.\nKey Takeaway: There are a number of metrics that can be used to gain insight into how well the Change Management process is working. These include: the number of RFCs, number of successful changes, the number of emergency changes, how many changes are waiting to be implemented, what kind of backlog there is, the business impact of changes, and how frequent changes occur to CIs."
    },
    {
      question: "A group of authorized changes is referred to as:",
      answer: "Release",
      options: ["Package","Container","Release","Bundle"],
      description: "A group of authorized changes is referred to as a Release\nKey Takeaway: The deployment of Releases can be executed in a variety of methods including: Big Bang (all users at once), Phased (some now, some later), Push (deployed locally then out to other locations), Pull (made available from a centralized locations where users can access as needed), Automated (use of technology to deploy), and Manual (manual steps to distributing the release)."
    },
    {
      question: "The underlying concept behind Service Validation and Testing is:",
      answer: "Quality Assurance",
      options: ["Release Efficiency","Quality Assurance","Business Impact","Requirements Traceability"],
      description: "The underlying concept behind Service Validation and Testing is Quality Assurance.\nKey Takeaway: Service Validation and Testing ensures that the implementation of releases will result in new or changed services that meet the customer\'s requirements. This is a crucial function within Service Management and without an effective means to validate and test it results in inefficient processes. Inefficient Service Validation and Testing result in incidents, unused services, higher costs, problems, and more demand for Service Desk help."
    },
    {
      question: "A baseline of a configuration that has been formally agreed to and managed through the Change Management process is called:",
      answer: "Configuration Baseline",
      options: ["Configuration Item","Configuration Baseline","Baseline of Configuration (BOC)","Service Baseline"],
      description: "The Configuration Baseline is a baseline of a configuration that has been formally agreed to and managed through the Change Management process.\nKey Takeaway: A Configuration Baseline is used as the basis for future builds, releases, and changes. It provides a means to signal a milestone in the development of a service, allows the build of a service from a known set of inputs, allows for changing or rebuilding in the future, is a means to bring together all relevant components ready for a change or release, and provides a basis for backing out a change."
    },
    {
      question: "The system that contains the entire set of repositories used to manage knowledge and information is called the:",
      answer: "SKMS",
      options: ["SKMS","CMS","SKDB","CMMS"],
      description: "The system that contains the entire set of repositories used to manage knowledge and information is called the Service Knowledge Management System (SKMS)\nKey Takeaway: The SKMS is a set of tools and databases that are used to manage knowledge and information. The SKMS stores, manages, updates, and presents all information that a service provider needs to manage the full lifecycle of services. It contains the Configuration Management System (CMS) information and the Configuration Management Databases (CMDB) data."
    },
    {
      question: "Knowledge Management is usually displayed within the ____________ structure or model:",
      answer: "DIKW",
      options: ["RACI","SKDB","CMDB","DIKW"],
      description: "Knowledge Management is usually displayed within the Data, Information, Knowledge, Wisdom structure or model.\nKey Takeaway: Data includes the discrete facts about events, Information is derived by applying context to the data and usually requires data from more than one source, Knowledge is the combination of experiences , ideas, values, and judgments from staff members, and Wisdom is the common sense judgment that leads to organizational strategies after applying context."
    },
    {
      question: "What contains the physical store of software master copies:",
      answer: "DML",
      options: ["DML","Software Asset Library","CMDB","RACI"],
      description: "The Definitive Media Library (DML) contains the physical store of software master copies.\nKey Takeaway: The Definitive Media Library (DML) is one or more locations in which the approved versions of all software CIs are stored securely. The DML will also contain the licenses for the software CIs along with the documentation. All software in the DML falls under Change Management and Release Management control and recorded in the Configuration Management System (CMS)."
    },
    {
      question: "A _________________ is any component that needs to be managed in order to provide an IT Service:",
      answer: "CI",
      options: ["Asset","Baseline","CI","RACI"],
      description: "A Configuration Item (CI) is any component that needs to be managed in order to provide an IT Service.\nKey Takeaway: Information regarding each CI is contained within the Configuration Management System (CMS) and each CI\'s lifecycle is managed by the Configuration Management process. Any changes to CIs are controlled by Change Management. There can be a variety of CIs: Service Level CIs, Service CIs, Organizational CIs, Internal CIs, and External CIs. Each CI can vary in size, type, and complexity ranging from an entire system to a single module."
    },
    {
      question: "A business value of Service Transition is:",
      answer: "Enables a high volume of changes and releases",
      options: ["Enables a high volume of changes and releases","Quantifies the impact of a loss of service","Protects the interests of those relying on information","Ensures security risks are effectively managed"],
      description: "A business value of Service Transition is that it enables a high volume of changes and releases.\nKey Takeaway: Effective Service Transition has additional value to the business such as providing an understanding to the level of risk during and after a change, it aligns the new or changed service to the business requirements, and end users can use the new or changed service effectively."
    },
    {
      question: "A Release Unit is:",
      answer: "A collection of an IT service\'s components normally released together",
      options: ["A collection of an IT service\'s components normally released together","A collection of RFCs for a particular service","Where DML data is stored","What contains a release package"],
      description: "A Release Unit is a collection of an IT service\'s components normally released together.\nKey Takeaway: Together, the components within a Release Unit generally are adequate to perform a successful function (e.g. a desktop PC that contains all the hardware and software). The unit may include various types of assets; however, the ideal release unit is dependent on the service or asset itself. It may be most appropriate to release an entire application to ensure nothing is missed in testing or it may simply be more granular such as a single page of a website update."
    },
    {
      question: "You are ready to release a new service into production. Which of the following is not an appropriate option in accordance with the release and deployment process:",
      answer: "Pilot",
      options: ["Pull","Pilot","Phased","Big bang"],
      description: "A Pilot is not an appropriate option for releasing a new service into production in accordance with the release and deployment process.\nKey Takeaway: A Pilot is a state for a service after it is first deployed and prior to a rollout. Valid release deployment options include Big Bang (all users at once), Phased (some now, some later), Push (deployed locally then out to other locations), Pull (made available from a centralized locations where users can access as needed), Automated (use of technology to deploy), and Manual (manual steps to distributing the release)."
    },
    {
      question: "Effective and efficient delivery and support of IT Services is a function of:",
      answer: "Service Operation",
      options: ["Service Strategy","Service Operation","Service Transition","Continual Service Improvement"],
      description: "Effective and efficient delivery and support of IT Services is a function of Service Operation.\nKey Takeaway: The success if Service Operation is hinged on the coordination and execution of the various activities and processes that must be delivered to meet the service level agreements. An important aspect of Service Operation is to manage any conflicts between the current operational status and the future changes and priorities."
    },
    {
      question: "Which of the following is the counter balance to Stability when balancing Service Operation?",
      answer: "Responsiveness",
      options: ["Responsiveness","Quality of Service","External Business View","Cost of Service"],
      description: "Responsiveness is the counter balance to Stability when balancing Service Operation.\nKey Takeaway: Service Operation has to understand that business needs are constantly changing and if there is too much focus on Responsiveness IT may make too many changes that lead to infrastructure instability. Stability is of importance but with too much focus on it will lead to a reluctance to adopt needed changes. As a result, this is a balancing act. Other factors that have to be balanced are Internal IT View vs. External IT View, Cost of Service vs. Quality of Service, and being Reactive vs. Proactive."
    },
    {
      question: "Which of the following definitions best describes the Call Centre service desk type?",
      answer: "High first-time resolution rate",
      options: ["Moderate first-time resolution rate","High first-time resolution rate","Low fist-time resolution rate","A wide variety of services offered"],
      description: "High first-time resolution rate best describes the Call Centre service desk type.\nKey Takeaway: A service desk type is referred to by its skill level and first-time resolution rate. A Call Centre is also characterized by a high call volume. A Help Desk service desk type has a moderate first-time resolution rate and handles is designed with managing incidents. A Service Desk service desk type has a high first-time resolution rate and provides a wide range of services."
    },
    {
      question: "Technical Management is comprised of the following staff:",
      answer: "Technical architects and support staff",
      options: ["Transition specialists and support staff","Technical architects and support staff","Technical architects and transition staff","Technical architects"],
      description: "Technical Management is comprised of technical architects and support staff.\nKey Takeaway: One or more technical support teams are required to provide Technical Management and support for the customer\'s infrastructure. The technical architects and designers are primarily engaged in Service Design while the maintenance and support staff are engaged in Service Operation, together they comprise Technical Management. Technical Management has the goal of ensuring the infrastructure is stable as a result of careful planning, implementation and ongoing operations."
    },
    {
      question: "IT Operations Management is tasked with performing the day-to-day activities to keep the infrastructure operational. Where are the performance standards defined?",
      answer: "Service Design",
      options: ["Service Design","Service Operation","Service Transition","IT Operations Management"],
      description: "The performances standards used by IT Operations Management to perform the day-to-day activities to keep the infrastructure operational are defined in Service Design.\nKey Takeaway: IT Operations Management role includes maintaining the \"status quo\" constantly assessing operations to seek ways to improve services while lowering costs, and ensuring the correct technical resources are engaged quickly to diagnose and resolve any failures. IT Operations Management also provides IT Operations Control (staffing and execution) and Facilities Management (the physical IT environment)."
    },
    {
      question: "An Operations Bridge or Network Operations Centre, and Event Management are all processes managed by:",
      answer: "IT Operations Control",
      options: ["Service Transition","IT Operations Management","IT Operations Control","Continual Service Improvement"],
      description: "An Operations Bridge or Network Operations Centre (NOC), and Event Management are all processes managed by IT Operations Control. Although answer B is technically correct because IT Operations Control is a function of IT Operations Management answer C is the BEST answer.\nKey Takeaway: IT Operations Control also consists of activities such as console management, job scheduling, backups & restores, and printing. The other function of IT Operations Management is Facilities Management and this consists of activities such as managing data centers, disaster recovery sites, facilities consolidations, and facilities contracts"
    },
    {
      question: "The Service Operation function that is primarily responsible for helping design, implement, and maintain applications is:",
      answer: "Application Management",
      options: ["Business Application Management","Application Operations Management","Application Service Management","Application Management"],
      description: "Application Management is the Service Operation function that is primarily responsible for helping design, implement, and maintain applications.\nKey Takeaway: Application Management, the Service Desk, Technical Management, and IT Operations Management are the four functions of Service Operation. Application Management is also responsible for managing applications through their entire life cycle, helps identify functional requirements for software, helps make the build vs. buy decisions, and helps define what skills are needed by staff to support the applications."
    },
    {
      question: "At the core of Operational Monitoring and Control is:",
      answer: "Event Management",
      options: ["Event Management","Service Operation","Service Transition","IT Service Management"],
      description: "Event Management is at the core of Operational Monitoring Control.\nKey Takeaway: Event Management is tasked with detecting events, understanding them, and defining the appropriate method to control it. Event Management detects and communicates operational information in addition to warnings and exceptions so this information can be fed into reporting. The information from Event Management may also be used to automate routine processing, assist with demand balancing, and across the infrastructure to improve performance."
    },
    {
      question: "An event is defined as:",
      answer: "A change of a CIs state that holds importance with IT management",
      options: ["An indicator that a response is needed","The result of a change request","A threshold warning","A change of a CIs state that holds importance with IT management"],
      description: "An event is a change of a CIs state that holds importance with IT management.\nKey Takeaway: The event may be something as simple as the completion of a batch processing job completed successfully, that a backup failed, or a situation that warrants closer monitoring. An event differs from an alert (a threshold warning) and a trigger (a response to an event may be needed). Events can be monitored automatically so detection by staff is simplified."
    },
    {
      question: "Which of the following is a correct chain of activities of Event Management?",
      answer: "Event Occurs --> Event Detection --Alert -->Event Correlation",
      options: ["Event Occurs --> Event Detection --> Event Correlation -->Alert","Event Occurs --> Event Detection --> Event Filtering --> Alert","Event Occurs --> Event Detection --Alert -->Event Correlation","Eenie --> Meenie --> Miney --> Moe"],
      description: "Event Occurs --> Event Detection --> Alert --> Event Correlation is the correct chain of activities of Event Management\nKey Takeaway: Event Occurs --> Event Detection --> Alert --> Event Correlation are the first four activities for Event Management followed by Significance of Events --> Event Filtering --> Trigger --> Response Selection --> Review Actions --> Close Event. It is likely that within an organization\'s IT infrastructure there would a high volume of events so it is important to ensure an appropriate set of triggers are in place to ensure the right events are getting the attention they need."
    },
    {
      question: "How do Problem Management and Incident Management differ?",
      answer: "Problem Management focuses on root cause and Incident Management focuses on the symptoms",
      options: ["Problem Management focuses on root cause and Incident Management focuses on the symptoms","Incident Management focuses on root cause and Problem Management focuses on the symptoms","Problem Management focuses on issue priority and Incident Management focuses issue urgency","There is no difference, they mean the same thing."],
      description: "The difference between Problem Management and Incident Management is that Problem Management focuses on root cause and Incident Management focuses on the symptoms.\nKey Takeaway: Incident Management is focused on restoring normal service operation as quickly as possible while reducing the impact to the business. This focus results in the highest levels of service quality and availability. Normal service operation is defined as operating within the limits of established Service Level Agreements (SLAs)."
    },
    {
      question: "Categorization is the unemotional/statistical aspect of Incident Prioritization whereas ___________________ is the human element of Incident Prioritization.",
      answer: "Escalation",
      options: ["Incident Management","Impact","Urgency","Escalation"],
      description: "Escalation is the human element of Incident Prioritization.\nKey Takeaway: A major concept of Incident Management is the difference between Categorization and Escalation. Within Categorization, Impact + Urgency = Priority. Impact is the measure of how much the business is affected. Urgency is measure of how long the fix can be delayed. The human element of Escalation helps with determining which incidents should be moved up or down in priority."
    },
    {
      question: "An incident that results in a major disruption of service is called a:",
      answer: "Major Incident",
      options: ["Major Impact","Major Urgency","Major Incident","Major Escalation"],
      description: "A Major Incident is an incident that results in a major disruption of service.\nKey Takeaway: In order to accommodate the importance for quick action, a major incident should have a separate set of procedures, with abbreviated timelines and a higher urgency. It\'s important for an organization to have a clear, agreed to set of criteria as to what comprises a major incident. Ideally, this process feeds into Problem Management so root cause analysis can lead to preventing the incident in the future."
    },
    {
      question: "______________ is responsible for managing the lifecycle of problems:",
      answer: "Problem Management",
      options: ["Incident Management","Problem Management","CAB","KEDG"],
      description: "Problem Management is responsible for managing the lifecycle of problems.\nKey Takeaway: Problem Management is focused on preventing problems, eliminating recurring incidents, and minimizing the impact of incidents. However, when a problem occurs it utilizes Reactive Problem Management to manage them. A problem is incident where the underlying cause is unknown. Although the activities of Reactive Problem Management are similar to Incident Management for logging the incident, the differ afterwards because root cause analysis and updates to the Known Error Database (KEDB) are made in Reactive Problem Management."
    },
    {
      question: "Trend Analysis is an activity of which process?",
      answer: "Proactive Problem Management",
      options: ["Proactive Problem Management","Proactive Incident Management","Reactive Problem Management","Reactive Incident Management"],
      description: "Trend Analysis is an activity of Proactive Problem Management.\nKey Takeaway: There are two key activities of Proactive Problem Management: Trend Analysis, and Targeting Preventative Action. Trend Analysis activities include reviewing reports from other processes to find trends worth attention. Targeting Preventative Action activities include conducting cost-benefit analysis for any investments in preventing problems, focusing on areas that are consuming the most support resources, and focusing on other vulnerable areas of the infrastructure by working with Availability Management and Capacity Management."
    },
    {
      question: "Satisfying requests from end users using standardized and repeatable processes is the goal of:",
      answer: "Request Fulfillment",
      options: ["Continual Service Improvement","Request Fulfillment","Advisory Board","Project Management"],
      description: "A Satisfying requests from end users using standardized and repeatable processes is the goal of Request Fulfillment.\nKey Takeaway: Request Fulfillment is designed to provide a conduit for users to request services, communicate the availability of services, source and deliver the components of the requested services, and manage with general information requests or complaints. Change Management has a direct impact on Request Fulfillment since it determines the types of changes that are pre-approved and those that can be effectively controlled and implemented by IT."
    },
    {
      question: "Your area of responsibility has just been expanded to manage the TANGO system; however, you have been denied access to the system. Which process is responsible for managing your access to TANGO?",
      answer: "Access Management",
      options: ["Access Management","Change Management","Access Validation Team","Service Operation"],
      description: "Access Management is responsible for managing access.\nKey Takeaway: Access Management is the function that ensures users are authorized to use a service. Access Management is coordinated by Service Desk but depending on the request may also call on Technical Management and Application Management. The activity lifecycle of an access request is as follows: Requesting Access --> Verification --> Providing Rights --> Monitoring Identity Status --> Logging & Tracking Access --> Removing or Restricting Access."
    },
    {
      question: "Which phase brings together all the other aspects of the Service Lifecycle together?",
      answer: "Continual Service Improvement",
      options: ["IT Service Management","Continual Service Improvement","Continuous Service Improvement","Centralized Service Management"],
      description: "Continual Service Improvement is the phase that brings together all the other aspects of the Service Lifecycle together\nKey Takeaway: In addition to bringing all the others aspects together Continual Service Improvement (CSI) ensures that there is a continual improvement in the services and capabilities of them. The following graphic shows the interrelationships"
    },
    {
      question: "Service Level Management is a process of which phases of the ITIL Service Model?",
      answer: "Service Design",
      options: ["Continual Service Improvement","Service Design","Service Operation","Service Strategy"],
      description: "Service Level Management is a process of the Service Design phase of the ITIL Service Model.\nKey Takeaway: Service Level Management is focused on ensuring that the agreed upon service levels are delivered for all services by identifying potential service improvements. Service Level Management is constantly analyzing Service Operation data, reporting, evaluating, and ultimately, improving. Service Level Management uses Service Improvement Plans to formally plan the implementation of improvements to processes and services."
    },
    {
      question: "Asking whether service levels are improving is a function of",
      answer: "Service Level Management",
      options: ["Service Level Management","Service Transition Management","Service Operations Management","Service Strategy"],
      description: "Asking whether service levels are improving is a function of Service Level Management.\nKey Takeaway: In addition to statistics around the number and percentage of services covered by SLAs, SLAs supported by UCs and OLAs, and service targets being met, there are questions that need to be asked and answered to round out the Key Performance Indicators (KPIs) of Service Level Management. Questions such as are the service levels improving, are customer\'s perceptions improving, and are IT costs reducing for stable processes, round out the KPIs. If any of these questions are answered with a \'no\' then there needs to be an investigation to determine why and a plan developed to make improvements that lead to a \'yes\'."
    },
    {
      question: "As a Service Level Manager, which of the following is not a challenge you would typically expect to be concerned with?",
      answer: "Requests for Change volume",
      options: ["Dealing with SLAs that need editing","That underpinning contracts are being ignored","Requests for Change volume","Improvement activities not being followed"],
      description: "As a Service Level Manager, you would not expect to be concerned of the volume of Requests for Changes.\nKey Takeaway: Service Level Management offers plenty of challenges but being concerned with the volume of changes is not one of them. Other challenges facing Service Level Management are determining service level targets that are realistic and achievable, a shortage of time, resources, and focus, not having equal representation on the senior management team, and dealing with SLAs that are too wordy, contain an excess of technical wording, and are not focused on the customer\'s needs."
    },
    {
      question: "The four reasons to monitor and measure within Service Measurement and Reporting are Validate, Direct, Justify, and _____________:",
      answer: "Intervene",
      options: ["Improve","Design","Strategize","Intervene"],
      description: "The four reasons to monitor and measure within Service Measurement and Reporting are Validate, Direct, Justify, and Intervene\nKey Takeaway: Coordinating the metrics, data collection, and reporting activities of the other processes and functions is the primary goal of Service Measurement and Reporting. The reasons for monitoring and measuring include: validate (is there alignment with the organizational vision and strategy), direct (using facts to drive change), justify (ensure the targets and metrics are correct), and intervene (drive improvements through corrective action)."
    },
    {
      question: "The type of metrics that are associated with performance and availability of infrastructure components is:",
      answer: "Technology Metrics",
      options: ["Service Metrics","Technology Metrics","Process Metrics","CI Metrics"],
      description: "Technology Metrics are the type of metrics that are associated with performance and availability of infrastructure components\nKey Takeaway: Technology Metrics are typically designed by the various technology specialists and architects within IT. The other two types of metrics are Process Metrics and Service Metrics. Process Metrics determine the overall health of a given process by measuring key performance indicators (KPIs) and activity metrics for the service management processes. Service Metrics are the responsibility of the Service Level Managers and Service Owners and defines the results of the end-to-end service by taking into consideration component metrics."
    },
    {
      question: "A baseline is a:",
      answer: "A point of reference for comparison",
      options: ["A point of reference for comparison","A field on the Request for Change","The most important aspect of IT Service Management","The unmarked lane between any two baseball bases"],
      description: "A baseline is a point of reference for comparison.\nKey Takeaway: Baselines are important because the document the agreed upon starting point within an organization for which future comparisons will occur. They can be used as a starting point against which to measure future improvement initiatives, a way to measure the performance over time, and, in the case of a Configuration Management baseline, can be used as a restore point by acting as a last-known good configuration."
    },
    {
      question: "What are the four phases of the Deming Cycle:",
      answer: "Plan, Do, Check, Act",
      options: ["Plan, Do, Check, Act","Plan, Do, Confirm, Act","Planning, Doing, Confirming, Acting","Plan, Do, Check, Action"],
      description: "The four phases of the Deming Cycle are Plan, Do, Check, Act.\nKey Takeaway: Plan, Do, Check, Act (PDCA) was introduced by Edward Deming, an American statistician. Deming is best known for his post-World War II work in Japan where he worked closely with executive managers on how to improve product quality. Deming is frequently considered a key factor for Japan\'s reputation today as a high-quality producer of products."
    },
    {
      question: "The first step in the CSI Improvement Process is",
      answer: "Define what you should measure",
      options: ["Define what can be measured","Analyze the data","Define what you should measure","Gather the data"],
      description: "The first step in the CSI Improvement Process is to define what you should measure.\nKey Takeaway: There are seven steps in the CSI Improvement Process is based on the Deming Cycle of Plan, Do, Check, Act. However, the Deming Cycle has more detailed steps when used to improve IT services and processes. The steps include: 1. Define what should be measured2. Define what you can measure3. Gather the data4. Process the data5. Analyze the data6. Use the data 7. Take corrective action."
    },
    {
      question: "A benefit of Continual Service Improvement is a/an:",
      answer: "Increased ROI",
      options: ["Decreased VOI","Increased ROI","Decreased ROI","Paycheck bonuses"],
      description: "A benefit of Continual Service Improvement is an increased Return on Investment (ROI).\nKey Takeaway: In addition to an increased ROI, Continual Service Improvement can lead to increased market growth, gaining a competitive advantage over competition, and an increased Value on Investment (VOI). A ROI is identified by the difference between savings achieved and the cost spent to realize the savings; typically represented in a percentage. A VOI is the additional value resulting from the creation of benefits. A Return on Investment is a component of Value on Investment."
    },
    {
      question: "How many phases are there in the Service Lifecycle:",
      answer: "5",
      options: ["4","5","6","4 Required plus 1 Optional"],
      description: "There are five phases in the Service Lifecycle.\nKey Takeaway: The same five volumes that comprise the Information Technology Infrastructure Library (ITIL) are what comprise the Service Lifecycle: Service Strategy, Service Design, Service Transition, Service Operation, and Continual Service Improvement. Keep in mind that there is a holistic integration of all phases and each phase will affect the other. The result is a continuous cycle."
    },
    {
      question: "Which ITIL Service Lifecycle phase provides guidance for the design and development of services?",
      answer: "Service Design",
      options: ["Service Design","Service Strategy","Service Transition","Service Operation"],
      description: "Service Design is the ITIL Service Lifecycle phase that provides guidance for the design and development of services.\nKey Takeaway: Service Design includes the principles for design and the methods for converting an organization\'s strategic objectives into service portfolios and service assets. Service Design is not limited to only new services. Service Design also includes any changes or improvements to existing services needed to increase or maintain value for the customer."
    },
    {
      question: "Which phase of the Service Lifecycle is incorporated in all the other phases?",
      answer: "Continual Service Improvement",
      options: ["Service Strategy","Service Design","Service Transition","Continual Service Improvement"],
      description: "Continual Service Improvement is the Service Lifecycle phases that is incorporated in all other phases\nKey Takeaway: Continual Service Improvement contains the guidance in how to create and maintain value for customers through improved design, implementation, and operation of services. Service quality and performance data, knowledge, and information all come together under Continual Service Improvement. Additional guidance is provided on linking improvement outcomes with Service Strategy, Service Design, and Service Transition."
    },
    {
      question: "Which volume of ITIL provides guidance on achieving efficiency in the delivery and support of services?",
      answer: "Service Operation",
      options: ["Service Design","Service Strategy","Service Transition","Service Operation"],
      description: "Service Operation is the ITIL volume that provides guidance on achieving efficiency in the delivery and support of services.\nKey Takeaway: Service Operation is the conduit for achieving strategic objectives as a result of delivering value for customers through service delivery and support. The main goal of Service Operation is to achieve effectiveness and efficiency while maintaining stability and flexibility. The key principle of Service Operation is effective communication, which includes routine operational communications, shift turnover communications, communications during projects, communications related to changes, exceptions, and emergencies, and training resources on new or changed processes and Service Designs."
    },
    {
      question: "\"A set of specialized organizational capabilities for providing value to customers in the form of services\" is the official definition of:",
      answer: "ITSM",
      options: ["ITIL","ITSM","RACI","Service Quality"],
      description: "\"A set of specialized organizational capabilities for providing value to customers in the form of services\" is the official definition of IT Service Management.\nKey Takeaway: There are many other definitions for ITSM but in essence they all include a component for the description of services required to deliver and support IT services in support of technology or products required by the business. It also includes a description of roles and responsibilities for the people involved and provides a means to manage external suppliers or partners. Regardless, all of these factors are constantly adjusting along with the needs of the customer"
    },
    {
      question: "What are the four perspectives or attributes of IT Service Management (ITSM)?",
      answer: "Partners/Suppliers, Process, People, & Products/Technology",
      options: ["Protocols, People, Process, & Products/Technology","Partners/Suppliers, Process, People, & Products/Technology","Procurement, Policies, People, & Production Support","Services Transition, Service Design, Service Strategy, & Service Operation"],
      description: "Partners/Suppliers, Process, People, & Products/Technology are the four perspectives or attributes of IT Service Management (ITSM).\nKey Takeaway: Often referred to as the \"four P\'s\" these perspectives or attributes are the cornerstones that comprise quality service delivery within an IT organization. If an organization provides IT services today then these provide for a foundation for continuous process improvement. For those organizations that are just starting out building an IT service delivery organization all four have to be considered as critical to success."
    },
    {
      question: "Which perspective of ITSM takes into consideration the \"soft\" side of IT?",
      answer: "People Perspective",
      options: ["Partners/Suppliers Perspective","Products/Technology Perspective","People Perspective","Process Perspective"],
      description: "The People Perspective of ITSM takes into consideration the \"soft\" side of IT.\nKey Takeaway: The \"soft\" side of IT includes the people side, including IT staff members, customers, and other stakeholders to ensure they have the skills needed to do their job. The Partner/Supplier Perspective is focused on the relationship with partners and suppliers; the Products/Technology Perspective considers software, hardware, IT services, tools, etc.; and the Process Perspective is focused on the overall delivery of process-driven services."
    },
    {
      question: "In general, the benefits of IT Service Management (ITSM) include ensuring the IT services are aligned with the needs of the organization, that there are integrated and centralized processes, and the quality of the service is continuously monitored and improved. Which of the follow is not generally a benefit of ITSM?",
      answer: "Satisfies the pre-requisite for an official ITSM Maturity Assessment",
      options: ["Metrics are collected to demonstrate how well the IT service is being delivered","Helps cost-justify the services","Satisfies the pre-requisite for an official ITSM Maturity Assessment","Ensures that there are clear roles and responsibilities in provisioning the service"],
      description: "Satisfies the pre-requisite for an official ITSM Maturity Assessment is not a benefit of IT Service Management (ITSM).\nKey Takeaway: Unlike a Capability Maturity Model (CMM/CMMI) appraisal from the Software Engineering Institute, there are no organizational assessments or certifications an organization can achieve as a result of implementing ITSM. Certifications are achieved on an individual person basis as a result of knowledge and capabilities of ITSM."
    },
    {
      question: "An outsourcer is considered a/an:",
      answer: "External Service Provider",
      options: ["Internal Service Provider","Shared Service Provider","Matrix-Driven Service Provider","External Service Provider"],
      description: "An outsourcer is considered an External Service Provider.\nKey Takeaway: An External Service Provider is focused on providing IT services to external customers. Contrast that role to an Internal Service Provider that is contained within a particular business unit and a Shared Service Provider that provides shared IT services to more than one business unit. An Internal Service Provider delivers a service that provides the business unit a competitive advantage whereas a Shared Service Provider is focused on supporting an effective and efficient business processes."
    },
    {
      question: "The basic services outcomes desired by customers are called:",
      answer: "Core services",
      options: ["Basic services","Core services","RACI","Service Quality"],
      description: "Core services deliver the basic outcomes desired by customers.\nKey Takeaway: There two service types: core and supporting. Core services represent the value that the customer needs or wants and for which they are willing to pay a fee. These can be contrasted to support services, which enable or enhance the value of the service. Enabling services include those basic factors that allow a provider to deliver the service whereas enhancing services are the factors that differentiate the service and lead to excitement."
    },
    {
      question: "Who is responsible for making sure that the process meets the needs of its purpose and that it produces the right outcomes?",
      answer: "Process owner",
      options: ["Process owner","Process manager","Process architect","The person in the cubicle next to me"],
      description: "The process owner is responsible for making sure that the process meets the needs of its purpose and that it produces the right outcomes.\nKey Takeaway: Although answer D could be correct in your particular office setting the answer we are looking for is A. The process owner should not be confused with the process manager who is responsible for the day-to-day management operations of the process. Process architect is not a valid ITIL term."
    },
    {
      question: "When defining a process it is important to consider the following?",
      answer: "Physical and behavioral aspects",
      options: ["Process owner and process manager relationships","Timeline for implementation","IT operational management demands","Physical and behavioral aspects"],
      description: "When defining a process it is important to consider both the physical and behavioral aspects that are present\nKey Takeaway: The physical aspects of a process (process documentation, process owner, process activities, etc.) normally garner the most attention but it is important to also consider the intangible behavioral aspects (e.g. communication needs, training requirements, etc.) within an organization when developing processes. This can be accomplished by making sure all the key stakeholders are involved in the design process."
    },
    {
      question: "What purpose does an IT Function serve?",
      answer: "To define the roles and responsibilities required for IT Services design, delivery, and management",
      options: ["It acts as the \'glue\' within ITSM","Determines the importance of a Service","To rhyme with conjunction","To define the roles and responsibilities required for IT Services design, delivery, and management"],
      description: "An IT Function defines the roles and responsibilities required for IT Services design, delivery, and management.\nKey Takeaway: The logical grouping is needed within Service Operation to ensure a steady state operation can be maintained. An IT Function ensures that each person knows their own role in the overall strategy of the team. Consider what would happen to a football team if the players didn\'t know what to do or where to go for each play? It would be utter chaos. The same applies to an IT service organization. An IT Function is the \'play book\' for the team."
    },
    {
      question: "Which of the following describes a Process?",
      answer: "Activities that take in one or more inputs and produce established outputs",
      options: ["Contains all the details of the IT services delivered to a customer","Activities that take in one or more inputs and produce established outputs","A table included in the ITIL Service library containing the steps required to request an IT service","The most important aspect of Availability Management"],
      description: "A process is the related set of activities that take in one or more inputs and produce established outputs designed to provide value to customers or stakeholders.\nKey Takeaway: It\'s important to understand that processes should be measured and these measurements used to drive the overall performance of the service; that the processes are themselves considered an asset because they are what sets a company apart from another in a competitive manner; and finally, processes are flexible such that they may or may not include areas such as roles and responsibilities, policies and procedures, and detailed instructions on how to perform work activities"
    },
    {
      question: "What are the two components of ITIL V3?",
      answer: "The five core books and the complementary publications",
      options: ["The five core books and the itSMF","The itSMF and the complementary publications","The five core books and the complementary publications","The complementary publications and ITIL Live"],
      description: "No description available."
    },
    {
      question: "\"Services are a means of delivering value to customers by facilitating the outcomes customers want to achieve without the ownership of specific costs and risks.\" Which entity owns the risks?",
      answer: "The service provider",
      options: ["The customer","The IT organization","The service provider","The service desk function"],
      description: "No description available."
    },
    {
      question: "Which of the following statements is correct?\n1. All processes should have an owner.\n2. A process takes one or more inputs and turns them into defined outputs, such as process reports and reviews.\n3. All processes\' objectives must be defined in measurable terms.\n4. All processes must have an objective.",
      answer: "All of the above",
      options: ["1 and 2 only","2 and 4 only","All of the above","1, 2, and 4"],
      description: "No description available."
    },
    {
      question: "Which of the following is not a primary concern of Service Strategy?",
      answer: "Defining a Release Plan",
      options: ["Providing guidance on setting strategy","Setting policies and objectives","Understanding how to create value for customers","Defining a Release Plan"],
      description: "No description available."
    },
    {
      question: "Which of the following statements is incorrect about patterns of demand generated by the customer\'s business?",
      answer: "Understanding patterns of business activity is unimportant",
      options: ["Demand can be influenced by charging different rates at different times.","They are delivered to the Capacity Management process so the capacity to deliver services at the agreed levels can be ensured.","They are driven by patterns of business activity","Understanding patterns of business activity is unimportant"],
      description: "No description available."
    },
    {
      question: "What are the three elements of the Service Portfolio?",
      answer: "Service Pipeline, Service Catalogue, Retired Services",
      options: ["Service Portfolio, Business Service Catalogue, Technical Services Catalogue","Service Knowledge Management System, Service Portfolio, Service Lifecycle","Service Pipeline, Service Catalogue, Retired Services","Chartered, Operational, Retired"],
      description: "No description available."
    },
    {
      question: "True or False? A customer\'s perceptions, customer\'s pre-established preferences, and actual business outcomes all influence the value of a service.",
      answer: "True",
      options: ["True","False"],
      description: "No description available."
    },
    {
      question: "Which of the following is the correct description of \"utility\"?",
      answer: "The attributes of the service that have a positive effect on the performance of activities, objects, and tasks associated with desired outcomes",
      options: ["A customer or organization doing business with an electrical or water-services company.","The service is fit for use.","An assurance of certain levels of availability, capacity, continuity, and security.","The attributes of the service that have a positive effect on the performance of activities, objects, and tasks associated with desired outcomes"],
      description: "No description available."
    },
    {
      question: "For which of the following is the Service Catalogue Manager responsible?\n1. Ensuring that information within the Service Pipeline is accurate and up to date.\n2. Ensuring that information in the Service Catalogue is consistent with information in the Service Pipeline.\n3. Ensuring that all operational services are recorded in the Service Catalogue.\n4. Ensuring that the information in the Service Catalogue is accurate and backed up.",
      answer: "3 and 4 only",
      options: ["1 and 2 only","All of the above","2, 3, and 4 only","3 and 4 only"],
      description: "No description available."
    },
    {
      question: "Which of the following list is a valid type of SLA?",
      answer: "Customer-based SLA",
      options: ["Priority-based SLA","Technology-based SLA","Location-based SLA","Customer-based SLA"],
      description: "No description available."
    },
    {
      question: "What do customer perceptions and business outcomes help to define?",
      answer: "The value of a service",
      options: ["The value of a service","Governance","Total cost of ownership (TCO)","Key performance indicators (KPIs)"],
      description: "No description available."
    },
    {
      question: "Which of the following are basic concepts used in access management?",
      answer: "Rights, access, identity, directory services, service/service components",
      options: ["Personnel, electronic, network, emergency, identity","Rights, access, identity, directory services, service/service components","Physical, personnel, network, emergency, service","Normal, temporary, emergency, personal, group"],
      description: "No description available."
    },
    {
      question: "Which of these statements about resources and capabilities is CORRECT?",
      answer: "Resources and capabilities are both types of service asset",
      options: ["Resources are types of service asset and capabilities are not","Resources and capabilities are both types of service asset","Capabilities are types of service asset and resources are not","Neither capabilities nor resources are types of service asset"],
      description: "No description available."
    },
    {
      question: "Within service design, what is the key output handed over to service transition?",
      answer: "Service design package",
      options: ["Measurement, methods and metrics","Service design package","Service portfolio design","Process definitions"],
      description: "No description available."
    },
    {
      question: "What should a service always deliver to customers?",
      answer: "Value",
      options: ["Applications","Infrastructure","Value","Resources"],
      description: "No description available."
    },
    {
      question: "Which process is responsible for the availability, confidentiality and integrity of data?",
      answer: "Information security management",
      options: ["Service catalogue management","Service asset and configuration management","Change management","Information security management"],
      description: "No description available."
    },
    {
      question: "Availability management is directly responsible for the availability of which of the following?",
      answer: "IT services and components",
      options: ["IT services and components","IT services and business processes","Components and business processes","IT services, components and business processes"],
      description: "No description available."
    },
    {
      question: "What is the name of the group that should review changes that must be implemented faster than the normal change process?",
      answer: "Emergency change advisory board",
      options: ["Technical management","Emergency change advisory board","Urgent change board","Urgent change authority"],
      description: "No description available."
    },
    {
      question: "Which of the following is NOT an objective of service transition?",
      answer: "To provide training and certification in project management",
      options: ["To ensure that a service can be operated, managed and supported","To provide training and certification in project management","To provide quality knowledge and information about services and service assets","To plan and manage the capacity and resource requirements to manage a release"],
      description: "No description available."
    },
    {
      question: "Which of the following types of service should be included in the scope of service portfolio management?\n1. Those planned to be delivered\n2. Those being delivered\n3. Those that have been withdrawn from service",
      answer: "All of the above",
      options: ["1 and 3 only","All of the above","1 and 2 only","2 and 3 only"],
      description: "No description available."
    },
    {
      question: "The BEST description of an incident is:",
      answer: "An unplanned interruption to service or a reduction in the quality of service",
      options: ["An unplanned disruption of service unless there is a backup to that service","An unplanned interruption to service or a reduction in the quality of service","Any disruption to service whether planned or unplanned","Any disruption to service that is reported to the service desk, regardless of whether the service is impacted or not"],
      description: "No description available."
    },
    {
      question: "Which one of the following is the CORRECT set of steps for the continual service improvement approach?",
      answer: "What is the vision?\nWhere are we now?\nWhere do we want to be?\nHow do we get there?\nDid we get there?\nHow do we keep the momentum going?",
      options: ["Devise a strategy\nDesign the solution\nTransition into production\nOperate the solution\nContinually improve","Where do we want to be?\nHow do we get there?\nHow do we check we arrived?\nHow do we keep the momentum going?","Identify the required business outcomes\nPlan how to achieve the outcomes\nImplement the plan\nCheck the plan has been properly implemented\nImprove the solution","What is the vision?\nWhere are we now?\nWhere do we want to be?\nHow do we get there?\nDid we get there?\nHow do we keep the momentum going?"],
      description: "No description available."
    },
    {
      question: "When can a known error record be raised?\n1. At any time it would be useful to do so\n2. After a workaround has been found",
      answer: "Both of the above",
      options: ["2 only","1 only","Neither of the above","Both of the above"],
      description: "No description available."
    },
    {
      question: "What body exists to support the authorization of changes and to assist change management in the assessment and prioritization of changes?",
      answer: "The change advisory board",
      options: ["The change authorization board","The change advisory board","The change implementer","The change manager"],
      description: "No description available."
    },
    {
      question: "Which process is responsible for discussing reports with customers showing whether services have met their targets?",
      answer: "Service level management",
      options: ["Continual service improvement","Change management","Service level management","Availability management"],
      description: "No description available."
    },
    {
      question: "Which of the following does NOT represent a stage in the Service Lifecycle",
      answer: "Service Architecture",
      options: ["Continual Service Improvement","Service Operation","Service Architecture","Service Strategy"],
      description: "Options (a), (b) and (d) are all stages of the lifecycle. Two other lifecycle stages not mentioned in the question are \'Service Design\' and \'Service Transition\'."
    },
    {
      question: "Which of the following requirements (see below statements 1-4) are adequate for an integrated set of Service Management technology?\n1. The tool should have an integrated Configuration Management System to allow the organization\'s IT infrastructure assets, components and services to be held together with all relevant attributes and to allow relationships between each to be stored and maintained.\n2. The tool should be able to plan changes and assess the impact of changes to minimize the likelihood of post-production problems.\n3. The tool should contain a workflow or process control engine to allow the predefinition and control of defined processes such as an Incident Lifecycle, Request Fulfilment Lifecycle, Problem Lifecycle, Change Model etc.\n4. The tool should ensure that all of the information within the Service Catalogue is accurate and up to date.",
      answer: "1 and 3 only",
      options: ["1 only","1 and 3 only","1, 3 and 4 only","All of the above"],
      description: "Option (2) and (4) are requirements for the processes and roles and not the tool."
    },
    {
      question: "Which of the following should be considered when automating Service Management?\n1. Simplify the service processes before automating them.\n2. Clarify the flow of activities, allocation of tasks, need for information and interactions.\n3. In self service situations, reduce the surface area of the contact users have with the underlying systems and processes.\n4. Do not be in a hurry to automate tasks and interactions that are neither simple nor routine.",
      answer: "1 and 2 only",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All of the above"],
      description: "All these guidelines should be considered when applying automation."
    },
    {
      question: "Which of the following characterizes a function?\n1. It is specialized to perform a certain type of work.\n2. It is self-contained with capabilities and resources for its performance.\n3. It is responsible for specific outcomes.\n4. It can be repeated and becomes manageable.",
      answer: "1, 2 and 3 only",
      options: ["1 only","1 and 3 only","1, 2 and 3 only","All of the above"],
      description: "Option 4 (it can be repeated and becomes manageable) is a characteristic of a process."
    },
    {
      question: "Which of the following are characteristics of a process\n1. Measurable\n2. Responds to a specific Event\n3. Has customers\n4. Leads to specific results",
      answer: "All of the above",
      options: ["1 only","1 and 3 only","1, 2 and 3 only","All of the above"],
      description: "All the four options are process characteristics."
    },
    {
      question: "A risk is measured by:\n1. the probability of a threat\n2.the vulnerability of the asset to a threat\n3. the countermeasures put in place\n4. the impact if a threat occurs",
      answer: "1, 2 and 4 only",
      options: ["1 only","2 and 4 only","1, 2 and 4 only","All of the above"],
      description: "Risk analysis involves the identification and assessment of the level of the risks calculated from the assessed values of assets (4) and the assessed levels of threats to (1), and vulnerabilities of (2), those assets, whereas countermeasures (3) are put in place based on the identified risks"
    },
    {
      question: "The value of a service is determined by:\n1. Preferences\n2. Practice\n3. Perceptions\n4. Business outcome",
      answer: "1, 3 and 4 only",
      options: ["1 only","1 and 3 only","1, 3 and 4 only","All of the above"],
      description: "Option (2) \'practice\' is not by itself a determinant for value proposition."
    },
    {
      question: "What are the MAIN activities in the Service Strategy management process?\n1. Define the market\n2. Develop the offerings\n3. Develop strategic assets\n4. Prepare for execution",
      answer: "All of the above",
      options: ["4 only","2 and 3 only","1, 2 and 3 only","All of the above"],
      description: "All of the activities are part of the Service Strategy management process."
    },
    {
      question: "Which of the following activities is NOT an activity in the Financial Management process?",
      answer: "Service devaluation",
      options: ["Service devaluation","Service Portfolio Management","Service Investment Analysis","Compliance"],
      description: "\'Service devaluation\' is not an activity in the Financial Management process, whereas \'Service valuation\' is."
    },
    {
      question: "Which of the following concepts and activities help Demand Management in managing the demand for services?\n1. Differentiated offerings\n2. Differentiated service levels\n3. Major Incident Management\n4. Analysing and tracking the activity patterns of a business process",
      answer: "1, 2 and 4 only",
      options: ["4 only","1 and 2 only","1, 2 and 4 only","All of the above"],
      description: "Major Incident Management is not a method drawn on by Demand Management."
    },
    {
      question: "Which of the following statements is NOT an objective of Service Design?",
      answer: "To plan and manage the resources to successfully establish a new or changed service into production with the predicted cost, quality and time estimates",
      options: ["To design services to satisfy business objectives.","To identify and manage risks","To plan and manage the resources to successfully establish a new or changed service into production with the predicted cost, quality and time estimates","To design efficient and effective processes for the design, transition, operation and improvement of high-quality IT services."],
      description: "This is one of the objectives of Service Transition."
    },
    {
      question: "Which of the following statements are CORRECT?",
      answer: "A Service Provider is an organization supplying services to one or more internal customers or external customers.",
      options: ["A Service Provider is an organization supplying services to one or more external customers.","A Service Provider is an organization supplying services to one or more internal customers or external customers.","A Service Provider is a third party responsible for supplying goods or underpinning services that are required to deliver IT services.","A Service Provider is a role that has responsibility for ensuring that all new services are designed to deliver the levels of availability required by the business and validation of the final design to meet the minimum levels of availability as agreed by the business for IT services."],
      description: "Option (a) is incorrect because a Service Provider can provide services internally (called a type I or II Service Provider). Option (c) is the definition of a Supplier, and option (d) is a responsibility for the Availability Manager."
    },
    {
      question: "Which of the following are the five major aspects of Service Design?\n1. Service Portfolio design\n2. Technology and architectural design\n3. Design of services\n4. Strategy design\n5. Process design\n6. Measurement design",
      answer: "1, 2, 3, 5 and 6",
      options: ["1, 2, 3, 4 and 5","1, 2, 4, 5 and 6","1, 2, 3, 5 and 6","2, 3, 4, 5 and 6"],
      description: "Strategy design is part of the Service Strategy stage of the lifecycle."
    },
    {
      question: "Which of the following is NOT a sourcing approach?",
      answer: "Rightsourcing",
      options: ["Insourcing","Co-sourcing","Rightsourcing","Application Service Provision"],
      description: "Rightsourcing is a popular way of saying that you need to make the right mix of the sourcing approaches."
    },
    {
      question: "Which of the following activities is an activity in the Service Level Management process?",
      answer: "Collate, measure and improve customer satisfaction",
      options: ["Collate, measure and improve customer satisfaction","Status reporting","Deploy Service Component","Resolution and Recovery"],
      description: "Option (b) is an activity from the Service Asset and Configuration Management process, option (c) is an activity from the Release and Deployment Management process and option (d) is an activity form the Incident Management process."
    },
    {
      question: "Which of the following metrics is BEST used to judge the efficiency and effectiveness of the Service Level Management process?",
      answer: "The number and severity of service breaches",
      options: ["Number and percentage of major incidents","The number and severity of service breaches","Reduction in the number of disruptions to services caused by inaccurate impact assessment.","Reduction in the costs of handling printer incidents"],
      description: "Option (a) is an example of an Incident Management metric, option (c) is an example of a metric to measure the efficiency and effectiveness of the Change Management process, and option (d) is an example of a Continual Service Improvement metric."
    },
    {
      question: "Consider the following roles and responsibilities:\nA. Availability Manager\nB. Service Catalogue Manager\nC. Supplier Manager\nD. Capacity Manager\n1. Analysis of usage and performance data, and reporting on performance against targets contained in Service Level Agreements.\n2. Ensuring that all of the information within the Service Catalogue is consistent with the information within the Service Portfolio.\n3. Performing contract or Service Level Agreement reviews at least annually and ensuring that all contracts are consistent with organizational requirements and standard terms and conditions wherever possible.\n4. Ensuring that all existing services deliver the levels of availability agreed with the business in Service Level Agreements.\nWhich of the following pairings between the roles and responsibilities is CORRECT?",
      answer: "A-4, B-2, C-3 and D-1",
      options: ["A-1, B-3, C-2 and D-4","A-1, B-2, C-3 and D-4","A-2, B-3, C-4 and D-1","A-4, B-2, C-3 and D-1"],
      description: "No description available"
    },
    {
      question: "Which of the following is NOT a sub-process of the Capacity Management process?",
      answer: "Configuration Capacity Management",
      options: ["Component Capacity Management","Configuration Capacity Management","Business Capacity Management","Service Capacity Management"],
      description: "There is nothing in ITIL called Configuration Capacity Management."
    },
    {
      question: "In the RACI authority matrix the letter \'C\' stands for:",
      answer: "Consulted",
      options: ["Classified","Configured","Consulted","Communication"],
      description: "RACI is an acronym for \'Responsible\', \'Accountable\', \'Consulted\' and \'Informed\'."
    },
    {
      question: "Service Transition adds value to the business by improving",
      answer: "the success rate of changes and releases for the business",
      options: ["the management of the technology that is used to deliver and support services","the success rate of changes and releases for the business","the design of the IT processes","the organizational competency for Continual Service Improvement"],
      description: "Option (a) is a benefit of Service Operation option, option (c) is a benefit of Service Design and option (d) is a benefit of Continual Service Improvement."
    },
    {
      question: "Which of the following is NOT a Change type?",
      answer: "Known Change",
      options: ["Normal Change","Emergency Change","Known Change","Standard Change"],
      description: "Known Change is not a specific term in ITIL."
    },
    {
      question: "Which of the following statements about the Service V model are CORRECT?\n1. Using a model such as the V model builds in service validation and testing early in the Service Lifecycle.\n2. The left-hand side of the V model represents the specification of the service requirements down to the detailed Service Design.\n3. The right-hand side of the V model focuses on the validation activities that are performed against the specifications defined on the left-hand side.\n4.Customers who sign off the agreed service requirements will also sign off the Service Acceptance Criteria and test plan.",
      answer: "All of the above",
      options: ["1 only","2 and 3 only","1, 2 and 3 only","All of the above"],
      description: "All statements are correct."
    },
    {
      question: "Consider the following activities from the Change Management process:\n1. Review the Change\n2. Assess and evaluate the Change\n3. Authorize the Change\n4. Coordinate Change implementation\n5. Review Request for Change\nWhich of the following options describes the CORRECT order of the activities?",
      answer: "5, 2, 3, 4, 1",
      options: ["1, 2, 3, 4, 5","1, 3, 4, 2, 5","5, 3, 2, 4, 1","5, 2, 3, 4, 1"],
      description: "The full list of the activities in the Change Management process can be found in Section 5.2.2."
    },
    {
      question: "Which of the following statements about the Configuration Management System are CORRECT?\n1. It will hold details of all of the components of the IT infrastructure as well as the relationships between these components.\n2. At the data level it consists of one and only one physical Configuration Management Database.\n3. The Service Knowledge Management System includes the Configuration Management System.\n4. It is maintained by Service Asset and Configuration Management.",
      answer: "1, 3 and 4 only",
      options: ["1 only","2 and 3 only","1, 3 and 4 only","All of the above"],
      description: "At the data level, the Configuration Management System may take data from several physical Configuration Management Databases, which together constitute a federated Configuration Management Database."
    },
    {
      question: "Which of the following statements BEST describes the objective of Service Operation?",
      answer: "To achieve effectiveness and efficiency in the delivery and support of services.",
      options: ["To design services to satisfy business objectives","To ensure that the service can be used in accordance with the requirements and constraints specified within the service requirements.","To achieve effectiveness and efficiency in the delivery and support of services.","To transform Service Management into a strategic asset."],
      description: "Option (a) is an objective of Service Design, option (b) is an objective of Service Transition and option (d) is an objective of Service Strategy."
    },
    {
      question: "Which of the following statements is the CORRECT definition of a Known Error?",
      answer: "A Problem that has a documented root cause and a Workaround.",
      options: ["An action taken to repair the root cause of an Incident or Problem.","A Problem that has a documented root cause or a Workaround","The unknown cause of one or more Incidents.","A Problem that has a documented root cause and a Workaround."],
      description: "Option (a) is the definition of a resolution, option (b) does not reflect that the definition of a Know Error requires both a root cause and a Workaround, and option (c) is the definition of a Problem."
    },
    {
      question: "Which of the following balances has to be dealt with by Service Operation?",
      answer: "Stability versus responsiveness",
      options: ["Supply versus demand","Push versus pull","Stability versus responsiveness","Cost versus resources"],
      description: "Options (a) and (d) are dealt with by Capacity Management in Service Design and option (b) refers to two alternative ways of deployment in Service Transition"
    },
    {
      question: "Which of the following activities is NOT an activity in the Incident Management process?",
      answer: "Incident Verification",
      options: ["Incident Identification","Incident Verification","Incident Categorization","Incident Prioritization"],
      description: "Incident verification is not an activity in the Incident Management process."
    },
    {
      question: "Which of the following activities is the Incident Manager responsible for?\n1. Producing management information\n2. Monitoring the effectiveness of Incident Management and making recommendations for improvement\n3. Managing the work for Incident support staff (first-line and second line).\n4. Managing major incidents",
      answer: "All of the above",
      options: ["1 only","2 and 3 only","1, 2 and 3 only","All of the above"],
      description: "All the activities are part of the responsibilities of the Incident Manager."
    },
    {
      question: "Which of the following is an objective for Problem Management",
      answer: "To minimize the impact of Incidents that cannot be prevented.",
      options: ["To define, document, agree, monitor, measure, report and review the level of IT service provided.","To minimize the impact of Incidents that cannot be prevented.","To restore normal Service Operation as quickly as possible and minimize the adverse impact on business operations.","To act as a basis for automating routine Operations Management activities"],
      description: "Option (a) is an objective for Service Level Management. Option (c) is an objective for Incident Management and option (d) is an objective for Event Management."
    },
    {
      question: "Which of the following are examples of Event types?\n1. Informational\n2. Warning\n3. Major\n4. Exception",
      answer: "1, 2 and 3 only",
      options: ["2 only","2 and 3 only","1, 2 and 3 only","All of the above"],
      description: "\'Major\' is not a type of Event but a \'type\' of Incident."
    },
    {
      question: "Which of the following options are typical ways of structuring and locating a Service Desk?\n1. Local Service Desk\n2. Centralized Service Desk\n3. Virtual Service Desk\n4. Follow-the-Sun",
      answer: "All of the above",
      options: ["2 only","2 and 3 only","1, 2 and 3 only","All of the above"],
      description: "All of the options can be used to structure and locate a Service Desk. In reality, an organization may need to implement a structure that combines a number of these options to fully meet the business needs."
    },
    {
      question: "Which of the following is NOT the responsibility of a Service Desk?",
      answer: "Closing all resolved Know Errors.",
      options: ["Providing first-line investigation and diagnosis.","Closing all resolved Incidents.","Resolving those Incidents it is able to resolve.","Closing all resolved Know Errors."],
      description: "Closing all resolved Know Errors is a responsibility of Problem Management."
    },
    {
      question: "Which of the following is NOT described as a function but as a process in Service Operation?",
      answer: "Event Management",
      options: ["Event Management","Applications Management","IT operations Management","Technical Management"],
      description: "No description available"
    },
    {
      question: "Which of the following is NOT an activity in the Deming PDCA cycle?",
      answer: "Align",
      options: ["Plan","Do","Check","Align"],
      description: "The activities in PDCA are Plan, Do, Check and Act."
    },
    {
      question: "What are the reasons to monitor and measure?\n1. To validate - monitoring and measuring to validate previous decisions.\n2. To direct - monitoring and measuring to set direction for activities in order to meet set targets.\n3. To justify - monitoring and measuring to justify, with factual evidence of proof, that a course of action is required.\n4. To intervene - monitoring and measuring to identify a point of intervention, including subsequent changes and corrective actions.",
      answer: "All of the above",
      options: ["1 only","1 and 2 only","1, 2 and 4 only","All of the above"],
      description: "All the options are basic reasons to monitor and measure"
    },
    {
      question: "Which of the following is an objective for the 7-Step Improvement process",
      answer: "To identify goals and objectives in order to properly identify what should be measured.",
      options: ["To provide operations visibility, insight and superior decision making.","To design processes for the design, transition, operations and improvement of IT Services.","To identify goals and objectives in order to properly identify what should be measured.","To minimize the impact of Incidents that cannot be prevented"],
      description: "Option (a) is an objective for Financial management. Option (b) is an objective for Service Design, and (d) is an objective for Problem Management."
    },
    {
      question: "Which of the following statements BEST describes one of the purposes of Service Analytics?",
      answer: "Service Analytics is useful to model existing components and services to the higher-level business services.",
      options: ["Service Analytics is a means for automating simple and routine tasks and interactions.","Service Analytics is useful to restore normal Service Operation as quickly as possible in case of an incident","Service Analytics is useful to model existing components and services to the higher-level business services.","Service Analytics is a means to ensure proper funding for the delivery and consumption for services."],
      description: "Option (a) is an objective for Event Management. (b) is an objective for Incident Management and (d) is an objective for Financial Management."
    },
    {
      question: "The goal of Problem Management is:",
      answer: "To prevent Problems and resulting incidents from happening.",
      options: ["To prevent Problems and resulting incidents from happening.","To provide a channel for users to request standard services.","To restore normal Service Operation as quickly as possible","To detect events, make sense of them, and determine the appropriate control action"],
      description: "Option (b) is a goal for Request Fulfillment, (c) is a goal for Incident Management and (d) is a goal for Event Management."
    },
    {
      question: "Which of the following statements BEST describes the role of the Service Desk as the single point of contact?",
      answer: "As a user I have one single point of contact for all incidents and Service Requests but other users in the organization may have other point of contact.",
      options: ["All requests, such as incidents, Service Requests and Service Level Requirements form users and customers must pass through the Service Desk.","To provide a single point of contact to the users, an organization can only have one centralized Service Desk.","As a user I have one single point of contact for all incidents and Service Requests but other users in the organization may have other point of contact.","The Service Desk is on offer for the users in an organization. But they are of course allowed to contact anybody within the IT organization with their incidents and Service Requests."],
      description: "Single point of contact is seen from user\'s perspective. Option (a) is incorrect because customers requests such as Service Level Requirements normally go to a Business Relationship Manager, a Service Level Manager or similar. Option (b) is incorrect because different users can contact different Service Desks as long as each user has only one single contact point. Option (d) is incorrect because single point of contact is also a means to ensure that all users requests are logged and tracked by a dedicated function."
    },
    {
      question: "Which of the following statements about the Process Owner role are CORRECT?\n1. Every person involved in a process is a Process Owner.\n2. The Process Owner is responsible for ensuring that the process is meeting the aims of the process definition.\n3. The Process Owner and Process Manager roles are always undertaken by the same person.\n4. Process Ownership is always a role as well as a function in any organization.",
      answer: "2 only",
      options: ["2 only","2 and 3 only","2, 3 and 4 only","All of the above"],
      description: "Only the person responsible for the process as a whole is the Process Owner; the Process Owner and Process Manager (i.e. Incident Manager) can be the same person, but is not necessarily the same person; and Process Ownership is always a role but is not necessarily implemented as a function in the organization."
    },
    {
      question: "Which of the following is NOT an activity in the Change Management process?",
      answer: "Change Design",
      options: ["Review the Request for Change","Plan updates","Change Design","Assess and evaluate change"],
      description: "There is no activity in the Change Management process for managing individual changes called \'Change Design\'."
    },
    {
      question: "Which of the following are goals and objectives for the Service Level Management process?\n1. To provide and improve the relationship and communication with the business and customers.\n2. To produce and maintain an appropriate and up-to-date Capacity Plan which reflects the current and future needs of the business.\n3. To ensure that proactive measures to improve the levels of service delivered and implemented.\n4. To support efficient and effective business and Service Management processes by providing accurate information about assets",
      answer: "1 and 3 only",
      options: ["1 only","1 and 3 only","1, 2 and 3 only","All of the above"],
      description: "Option 2 is an objective for Capacity Management and option 4 is an objective for Service Asset and Configuration Management."
    },
    {
      question: "Which of the following metrics types is NOT a typical type of metrics?",
      answer: "Baseline metrics",
      options: ["Technology metrics","Service metrics","Baseline metrics","Process metrics"],
      description: "Baselines are markers or starting points for later comparisons of measurements"
    },
    {
      question: "Which of the following validation activities BEST corresponds to the definition of Customer and business requirements (level 1) in the Service V-model?",
      answer: "Validate Service Package, offerings and contracts",
      options: ["Validate Service Package, offerings and contracts","Service operational readiness test","Service Release Package test","Component and assembly test"],
      description: "Option (b) corresponds to level 3 (define Service Solution), option (c) corresponds to level 4 (define Service Release) and option (d) corresponds to level 5 (develop Service Solutions)"
    },
    {
      question: "Which of the following statements BEST describes the difference between an Operational Level Agreement and an Underpinning Contract?",
      answer: "Only the Operational Level Agreement is an underpinning agreement between an IT Service Provider and another part of the same organization that assists with the provision of services.",
      options: ["Only the Operational Level Agreement is an underpinning agreement between an IT Service Provider and another part of the same organization that assists with the provision of services.","Only the Service Level Agreement defined the goods or services to be provided and the responsibilities of both parties.","Only the Underpinning Contract defines targets and responsibilities that are required to meet agreed Service Level Targets in a Service Level Agreement.","Only the Underpinning Contract support the IT Service Provider\'s delivery of IT services to customers"],
      description: "Option (b), (c) and (d) are true for both types of agreement."
    },
    {
      question: "Which of the following goals are the primary goals for Service Operations?\n1. To allow for changes and improvement\n2. To design processes for the operation of IT services\n3. To achieve effectiveness and efficiency in the delivery and support of services.\n4. To maintain stability",
      answer: "1, 3 and 4 only",
      options: ["3 only","3 and 4 only","1, 3 and 4 only","All the above"],
      description: "Option 2, design of processes, is a goal for Service Design."
    },
    {
      question: "Which of the following is the CORRECT definition of Service Management?",
      answer: "Service Management is a set of specialized organizational capabilities for providing value to customers in the form of services.",
      options: ["Service Management is a set of specialized organizational resources for providing value to customers in the form of services.","Service Management is a set of specialized organizational resources for providing value to customers in the form of goods and products.","Service Management is a set of specialized organizational capabilities for providing value to customers in the form of services.","Service Management is a set of specialized organizational capabilities for providing value to the Service Provider in the form of goods and products."],
      description: "Service Management is a set of specialized organizational capabilities for providing value to customers in the form of services."
    },
    {
      question: "Consider the following types of technological support of Service Management and the corresponding descriptions.\nA Technology-assisted\nB Technology-facilitated\nC Technology-mediated\nD Technology-generated (self-service)\n1. The Service Provider is represented entirely by technology\n2. The Service Provider and the customer are not in physical proximity\n3. Only the Service Provider has access to the technology.\n4. Both the Service Provider and the customer have access to the same technology\nWhich of the following pairings between roles and responsibilities is CORRECT?",
      answer: "A-1, B-2, C-3 and D-4",
      options: ["A-3, B-1, C-2 and D-4","A-1, B-2, C-3 and D-4","A-3, B-4, C-2 and D-1","A-4, B-3, C-2 and D-1"],
      description: "No description available"
    },
    {
      question: "Which of the following is NOT described as a function but as a process in the ITIL Service Management Practices framework?",
      answer: "Service Portfolio Management",
      options: ["Technical Management","Service Portfolio Management","Service Desk","Applications Management"],
      description: "Service Portfolio Management is described as a process, whereas Technical Management, Service desk and Applications Management are described as functions in the Service Operation volume."
    },
    {
      question: "Which of the following roles may be involved in the Continual Service Improvement process?\n1. The Continual Service Improvement Manager\n2. The customer\n3. The Service Manager\n4. The Process Owners",
      answer: "All of the above",
      options: ["1 only","1 and 3 only","1, 3 and 4 only","All of the above"],
      description: "Not only all the internal roles in the Service provider organizations but also the customers should be involved in Continual Service Improvement"
    },
    {
      question: "Which of the following statements BEST describes prioritization in the Incident Management process?",
      answer: "Prioritization is determined by the urgency of the Incident and the level of impact the Incident is causing.",
      options: ["Prioritization is determined by the urgency of the Incident and the level of impact the Incident is causing.","Prioritization is determined by the resources available and the level of impact the Incident is causing.","Prioritization is determined by the resources available and the urgency of the Incident.","Prioritization is determined by the resources available, the urgency of the Incident and the level of impact the Incident is causing."],
      description: "The resources available are not determining the prioritization of the incident. Constraints to resources are the reason to do the prioritization."
    },
    {
      question: "Which of the following questions is NOT one of the 7 Rs that must be answered for all changes as part of the impact assessment?",
      answer: "Who is going to REVIEW the change when it has been implemented?",
      options: ["What RESOURCES are required to deliver the change?","Who RAISED the change?","What is the RELATIONSHIP between this change and other changes?","Who is going to REVIEW the change when it has been implemented?"],
      description: "The review and close of the change is not part of the impact assessment"
    },
    {
      question: "The BEST way to define the services in the Service Portfolio is to base the definitions on:",
      answer: "The business outcome of the service.",
      options: ["The resources needed to deliver the service.","The business outcome of the service.","The capabilities needed to deliver the service.","The composition of the service"],
      description: "an outcome-based definition of services ensures that the organization plans and execute all aspects of Service management entirely from the perspective of what is valuable to the customer."
    },
    {
      question: "Which of the following statements is the CORRECT description of the \'Act\' stage in the Deming Cycle for quality improvement?",
      answer: "At this stage it is determined to keep the status quo, close the gap or add necessary resources",
      options: ["At this stage goals and measures are established.","At this stage the implemented improvements are compared to the measures of success.","At this stage it is determined to keep the status quo, close the gap or add necessary resources","At this stage a project to close identified gaps is developed and implemented."],
      description: "Option (a) is a description of the \'Plan\' stage. Option (b) is a description of the \'Check\' stage and option (d) is a description of the \'Do\' stage."
    },
    {
      question: "Which of the following questions helps identifying what a customer values?\n1. Who is our customer?\n2. Who depends on our services?\n3. How does the customer use our services?\n4. What do we provide?",
      answer: "1, 2 and 3 only",
      options: ["1 only","1 and 3 only","1, 2 and 3 only","All of the above"],
      description: "Knowledge of the Service Provider\'s current services does not help identifying what a customer values."
    },
    {
      question: "The goal of Continual Service Improvement is BEST described as:",
      answer: "To continually align and re-align IT Services to the changing business needs by identifying and implementing improvements to IT services that support business processes.",
      options: ["To continually align and re-align IT Services to the changing business needs by identifying and implementing improvements to IT services that support business processes.","To encourage Service Providers to stop and think why something is to be done before thinking how.","To continually identify and implement improvements to IT components that support the general technological developments.","To design service that satisfy business objectives."],
      description: "Option (b) is the goal for Service Strategy, option (c) focuses on technological developments instead of the business needs and the supporting IT Services, and option (d) is an objective for Service Design."
    },
    {
      question: "Which of the following are generic elements of a process?\n1. Process activities\n2. Process policy\n3. Process roles\n4. Process metrics",
      answer: "All of the above",
      options: ["1 only","1 and 3 only","1, 2 and 3 only","All of the above"],
      description: "All of the stated elements forms part of process as well as procedures, work instructions, triggers, input, output, capabilities, etc."
    },
    {
      question: "Which of the following statements are CORRECT regarding the RACI authority matrix?\n1. The \'R\' in RACI stands for \'Responsible\'.\n2. The RACI chart shows the activities down the left-hand side and the functional roles across the top.\n3. More than one person can be accountable for each task.\n4. The \'I\' in RACI stands for \'Initiator\'.",
      answer: "1 and 2 only",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All of the above"],
      description: "More than one person can be responsible for each task but only one person can be accountable for each task. \'I\' stands for \'Informed\'."
    },
    {
      question: "Which of the following is NOT an activity that IT Operations Management is responsible for",
      answer: "Maintenance of a stable technical infrastructure",
      options: ["Console management","Management of facilities","Output management","Maintenance of a stable technical infrastructure"],
      description: "Technical Management, not IT Operations Management is responsible for planning, implementing and maintaining a stable technical infrastructure."
    },
    {
      question: "Assume that IT Operations is separated from Technical and Application Management. Which of the following roles does Technical and Application Management normally NOT play in the Event Management process?",
      answer: "Monitoring Events.",
      options: ["Participating in the instrumentation of the service.","Testing the services to ensure that Events are properly generated.","Ensuring that any auto response are defined","Monitoring Events."],
      description: "Where IT Operations is separated from Technical and Application Management, IT Operations is commonly delegated the Event monitoring and first-line response activities."
    },
    {
      question: "Which of the following statements are CORRECT about Service Asset and Configuration Management?\n1. Configuration Management delivers a logical model of the services, assets and the infrastructure.\n2. Information about each Configuration items is recorded in a configuration record in the Configuration Management System.\n3. The Service Knowledge Management System includes the Configuration Management System and databases as well as other tools and databases.\n4. Status Accounting and Reporting is an activity in the Service Asset and Configuration Management Process.",
      answer: "All of the above",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All of the above"],
      description: "All of the statements are true, about Service Asset and Configuration Management."
    },
    {
      question: "Which of the following statements BEST describes the goals of Supplier Management?\n1. To ensure that underpinning contracts and agreements with suppliers are aligned to business needs and managed though their lifecycle.\n2. To manage relationships with suppliers.\n3. To ensure that the information security risks are appropriately managed and enterprise information resources are used responsibly.\n4. To maintain a supplier policy and a supporting Supplier and Contract Database.",
      answer: "1, 2 and 3 only",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All of the above"],
      description: "Even though it is important to manage information security risks for data and services managed by third parties (option 3), this is a responsibility for the Information Security Management Process."
    },
    {
      question: "Which of the following activities BEST help an organization managing and developing Service Management as a strategic asset?\n1. Identification of critical services across the Service Portfolio for a given customer of market space.\n2. Establishment of the right mix of service to offer to customers.\n3. Tagging all service assets with the name of the service to which they add service potential.\n4 Creation of diagnostic scripts for diagnosis of incidents",
      answer: "1, 2 and 3 only",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All the above"],
      description: "Options 1, 2 and 3 are all part of the activities involved in developing Service Management as a strategy asset within the Service Strategy Management process. Option 4 improves the Service Management processes but not necessarily as a strategic asset."
    },
    {
      question: "A key role for Service Operations is to achieve a balance between conflicting sets of priorities. A fundamental conflict exits between IT as a set of technology components on one side and:",
      answer: "the view in which the organization focuses only on business requirements and the service delivered",
      options: ["the view in which the organization focuses only on business requirements and the service delivered","the ability to respond to change without impacting on other services","a strong focus on delivering quality","proactive behaviour on the other side"],
      description: "The other options are counterparts of stability, costs and relative behavior, respectively."
    },
    {
      question: "When should a Service Design Package be produced?",
      answer: "During the design stage, for each new service, major change to a service or removal of a service.",
      options: ["During the strategy stage, for each time a new service is added to the Service Portfolio.","During the design stage, for each change to a service or removal of a service.","When a new or changed service is passed from Service Design to Service Transition.","During the design stage, for each new service, major change to a service or removal of a service."],
      description: "The Service Design Package should be produced during the design stage for new, changed and removed services. A Service Design package is normally only produced for major changes."
    },
    {
      question: "Which of the following benefits is NOT primarily the result of good Service Design practises?",
      answer: "Increased success rate of changes and releases for the business.",
      options: ["Reduced total costs of ownership.","More effective Service Management processes","Increased success rate of changes and releases for the business.","Improve quality and consistency of service"],
      description: "An increased rate of success of changes and releases is first and foremost a result of good Service Transition practices. The (a) total cost of ownership is reduced as a result of well-designed services, processes and technology, (b) more effective processes are a result of processes designed with optimal quality and cost effectiveness and (d) improved quality and consistency of services are the result of services designed within the corporate strategy, architecture and constraints."
    },
    {
      question: "ITIL is BEST characterized as:",
      answer: "Good practise",
      options: ["An international standard","Good practise","A qualification scheme","Academic research"],
      description: "ITIL is an example of good practice. (a) ISO/IEC 20000 provides a formal standard for organizations seeking to have their Service Management Capabilities audited and certified, (c) the IT Service Management certifications and diplomas owned by OGC and management by AMPG form an example of a qualifications scheme and (d) there are good examples of academic research supporting and/or criticizing ITIL itself is not academic research"
    },
    {
      question: "Which of the following activities is the Service Owner of a specific service responsible for?\n1. Representing the service in Change Advisory Board meetings.\n2. Participating in negotiating Service Level Agreements.\n3. Defining the process strategy.\n4. Liaising with the appropriate Process Owners",
      answer: "1, 2 and 4 only",
      options: ["1 only","1 and 2 only","1, 2 and 4 only","All of the above"],
      description: "Defining the process strategy is a responsibility of the Process Owner, whereas the Service Owner is responsible for the three other activities."
    },
    {
      question: "Which of the following is the CORRECT order of the activities in the 7-Step Improvement Process (first activity first)",
      answer: "1- Define what you should measure. 2- Define what you can measure. 3-Gather data. 4- Process data. 5- Analyse data. 6- Present information. 7-Implement corrective action.",
      options: ["1- Define what you should measure. 2- Define what you can measure. 3-Gather data. 4- Process data. 5- Analyse data. 6- Present information. 7-Implement corrective action.","1- Define what you can measure. 2- Define what you should measure. 3- Gather data. 4- Analyse data. 5- Process data. 6- Present information. 7- implement corrective action.","1- Define what you should measure. 2- Define what you can measure. 3-Gather data. 4- Analyse data. 5- Process data. 6- Present information. 7- Implement corrective action.","1- Define what you can measure. 2- Define what you should measure. 3- Gather data. 4- Process data. 5- Analyse data. 6- Present information. 7- Implement corrective action."],
      description: "No description available"
    },
    {
      question: "Which of the following methods is NOT a development approach?",
      answer: "Request",
      options: ["Big-bang","Phased","Pull","Request"],
      description: "A development method called \'Request\' does not exist in ITIL. Option (a) is where the new or changed service is deployed to all user areas in one operation, (b) is where the service is deployed to a part of the user base initially and this operation is repeated for subsequent parts of the user base, and (c) is where the software is available in a central location but users are free to download the software at a time of their choosing."
    },
    {
      question: "Which of the following activities forms part of the Service Portfolio Management process?\n1. Analyse\n2. Define\n3. Approve\n4. Charter",
      answer: "All of the above",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All of the above"],
      description: "All of the activities are part of the Service Portfolio Management process."
    },
    {
      question: "To answer the question: \'Where do we want to be?\' In the Continual Service Improvement model, we need to know:\n1. The vision of the organization\n2. The mission of the business\n3. The current baseline\n4. The metrics",
      answer: "1, 2 and 3 only",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All of the above"],
      description: "The answer to the question \'Where do we want to be?\' Involves measurable targets, which are the prerequisites for defining the metrics. We therefore only need to know the vision, mission, goals, objectives and baseline to answer the question."
    },
    {
      question: "Good Service Design is dependent on effective and efficient use of the four Ps -people, processes, partners and:",
      answer: "Products",
      options: ["Plans","Products","Practices","Policies"],
      description: "Good Service Design is dependent on all four answers, but the last \'P\' in the four \'Ps\' tenet stands for products."
    },
    {
      question: "Which is the best description of a Service Catalogue?",
      answer: "A database or structured document with information about all live IT services, including those available for deployment.",
      options: ["A document defining all aspects of an IT Service and its requirements through each stage of its lifecycle.","The complete set of services that are managed by a Service Provider","A database or structured document with information about all live IT services, including those available for deployment.","An agreement between and IT Service Provider and the IT customer(s)."],
      description: "The other are definitions of (a) a Service Design Package, (b) a Service Portfolio and (d) a Service Level Agreement."
    },
    {
      question: "Which of the following statements are CORRECT about utility and warranty?\n1.Utility can be described as what the customer gets\n2. Warranty can be defined as \'fitness for use\'.\n3. Utility increases the average performance\n4. Warranty reduces the variation in performance",
      answer: "All of the above",
      options: ["1 only","1 and 2 only","1, 2, and 3 only","All of the above"],
      description: "All of the statements are true for utility and warranty."
    },
    {
      question: "The Service Portfolio is the single integrated source of information on the status,interfaces and dependencies of each service used by activities within the following stages in the Service Lifecycle:\n1. Service Strategy\n2. Service Transition\n3. Service Design\n4. Service Operation",
      answer: "All of the above",
      options: ["1 only","1 and 2 only","1, 2 and 3 only","All of the above"],
      description: "The Service Portfolio acts as the connection point or the \'spine\' of all five stages in the Service Lifecycle."
    }
  ];

  return {
    all: function() {
      return questions;
    },
    getFiveMore: function(total){
      return questions.slice(total, total+5);
    },
    randomQuestion: function(){
      seed = new Date();
      var i = last;
      while(i == last){
        i = Math.floor(Math.random(seed.getTime())*questions.length);
      }
      last = i;
      return questions[i];
    }
  };
});
