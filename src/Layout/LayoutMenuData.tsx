import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
   
    const [isTracking, setIsTracking] = useState(false);
    const [isStudents, setIsStudents] = useState(false);
    const [isSchedle, setIsSchedle] = useState(false);
    const [isFeedbackClaims, setIsFeedbackClaims] = useState(false);
    const [isPayement, setIsPayement] = useState(false);
    const [isAccounts, setIsAccounts] = useState(false);
    const [isTools, setIsTools] = useState(false);
    const [isHelp, setIsHelp] = useState(false);


    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                // var id: any = item.getAttribute("subitems");
                // if (document.getElementById(id)){
                //     document.getElementById(id).classList.remove("show");
                // }
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        
        if (iscurrentState !== 'Tracking') {
            setIsTracking(false);
        }
        if (iscurrentState !== 'Students') {
            setIsStudents(false);
        }
        if (iscurrentState !== 'Programming') {
            setIsSchedle(false);
        }
        if (iscurrentState !== 'Feedback&Claims') {
            setIsFeedbackClaims(false);
        }
        if (iscurrentState !== 'Payement') {
            setIsPayement(false);
        }
        if (iscurrentState !== 'Accounts') {
            setIsAccounts(false);
        }
        if (iscurrentState !== 'Tools') {
            setIsTools(false);
        }
        if (iscurrentState !== 'Help') {
            setIsHelp(false);
        }
      
    }, [
        iscurrentState,
        isTracking,
        isStudents,
        isSchedle,
        isFeedbackClaims,
        isPayement,
        isAccounts,
        isTools,
        isHelp
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "Dashboard",
            label: "Dashboard",
            icon: "ph ph-gauge",
            link: "/dashboard",

        },
    
        {
            id: "job",
            label: "Jobs",
            icon: "ph ph-jeep",
            link: "/pushed-job",
            click: function (e: any) {
                e.preventDefault();
                setIsSchedle(!isSchedle);
                setIscurrentState('Programming');
                updateIconSidebar(e);
            },
            stateVariables: isSchedle,
            subItems: [
               
                {
                    id: "newJob",
                    label: "New Job",
                    link: "/new-jobs",
                    parentId: "newJob",
                    icon: "ph ph-plus-circle",
                },
                {
                    id: "acceptedJob",
                    icon:"ph ph-check-square",
                    label: "Accepted Job",
                    link: "/jobs/accepted-jobs",
                    parentId: "completedJob",
                },
                {
                    id: "completedJob",
                    icon:"ph ph-checks",
                    label: "Completed Job",
                    link: "/jobs/completed-jobs",
                    parentId: "completedJob",
                },
                {
                    id: "canceledJob",
                    label: "Cancelled Job",
                    link: "/jobs/canceled-jobs",
                    parentId: "pushed-job",
                    icon: "ph ph-x",
                },
            ],
        },
       
        // {
        //     id: "Accounts",
        //     label: "Accounts",
        //     icon: "ph ph-user-circle-gear",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsStudents(!isStudents);
        //         setIscurrentState('Students');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isStudents,
        //     subItems: [
        //         {
        //             id: "Groups",
        //             label: "Groups",
        //             icon: "ph ph-users-four",
        //             link: "/groups",
        //             parentId: "groups",
                    
        //         },

        //         {
        //             id: "parents",
        //             label: "Parents",
        //             link: "/parents",
        //             parentId: "parents",
        //             icon: "ph ph-users",
        //         },
        //         {
        //             id: "students",
        //             label: "Students",
        //             link: "/students",
        //             parentId: "students",
        //             icon: "ph ph-student",
        //         },
        //         // {
        //         //     id: "accounts",
        //         //     label: "Create Accounts",
        //         //     link: "/create-accounts",
        //         //     parentId: "accounts",
        //         //     icon: "ph ph-user-plus",
        //         // },
                
                
        //     ],
        // },
        
                
        {
            id: "invoices",
            label: "Invoices",
            link: "/invoices",
            parentId: "invoices",
            icon:"ph ph-note-pencil",
        },
        // {
        //     id: "history",
        //     label: "History",
        //     link: "/history",
        //     parentId: "history",
        //     icon:"ph ph-clock-counter-clockwise",
        // },
          {
            id: "Administration",
            label: "Administration",
            icon: "ph ph-user-gear",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsStudents(!isStudents);
                setIscurrentState('Students');
                updateIconSidebar(e);
            },
            stateVariables: isStudents,
            subItems: [
                {
                    id: "Driver",
                    label: "Driver",
                    icon: "ph ph-identification-badge",
                    link: "/drivers",
                    parentId: "Driver",
                    
                },

                {
                    id: "Vehicle",
                    label: "Vehicle",
                    link: "/vehicles",
                    parentId: "Vehicle",
                    icon: "ph ph-jeep",
                },
             
                
                
            ],
        },
        
        {
            id: "profile",
            label: "Profile",
            link: "/profile-affiliate",
            parentId: "profile",
            icon:"ph ph-user",
        },
        // {
        //     id: "tools",
        //     label: "Tools",
        //     icon: "ph ph-wrench",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsTools(!isTools);
        //         setIscurrentState('Tools');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isTools,
        //     subItems: [
                
        //         {
        //             id: "Complains",
        //             label: "Complains",
        //             icon: "ph ph-quotes",
        //             link: "/claims-management",
        //             parentId: "groups",
                    
        //         },

        //         {
        //             id: "payment",
        //             label: "Finance",
        //             link: "/payement-management",
        //             parentId: "parents",
        //             icon: "ph ph-currency-gbp",
        //         },
        //         {
        //             id: "reporting",
        //             label: "Reporting",
        //             link: "/reporting-management",
        //             parentId: "students",
        //             icon: "ph ph-chart-line-up",
        //         },
        //         {
        //             id: "extra",
        //             label: "Extra Trips",
        //             link: "/list-extra-trips",
        //             parentId: "students",
        //             icon: "ph ph-bus",
        //         },
              
               
        //         {
        //             id: "ArchivedComplains",
        //             label: "Archived Complains",
        //             link: "/complains/archive",
        //             parentId: "ArchivedComplains",
        //             icon: "ph ph-quotes",
        //         },


                
        //     ],
        // },

        // {
        //     id: "Help",
        //     label: "Help",
        //     icon: "ph ph-info",
        //     link: "/#",
        //     click: function (e: any) {
        //       e.preventDefault();
        //       setIsHelp(!isHelp);
        //       setIscurrentState("Help");
        //       updateIconSidebar(e);
        //     },
        //     stateVariables: isHelp,
        //     subItems: [
        //       {
        //         id: "User Manual",
        //         label: "User Manual",
        //         link: "/user-manual",
        //         icon: "ph ph-book-open",
        //         parentId: "Help",
        //       },
        //       {
        //         id: "Request Feature",
        //         label: "Request Feature",
        //         link: "/request-feature",
        //         icon: "ph ph-list-plus",
        //         parentId: "Help",
        //       },
        //       {
        //         id: "ReportError",
        //         label: "Report an Error",
        //         link: "/report-error",
        //         icon: "ph ph-bug",
        //         parentId: "Help",
        //       },
        //     ],
        //   },
            
        
        
       
       
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;