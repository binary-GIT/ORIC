namespace WebApi.Dtos
{
    public class ric_form_1Dto
    {
        public required string faculty_name { get; set; }
        public required string department_name { get; set; }
        public required string faculty_email { get; set; }
        public int research_grants_submitted_hec { get; set; }
        public int research_grants_submitted_non_hec { get; set; }
        public int research_grants_approved_hec { get; set; }
        public int research_grants_approved_non_hec { get; set; }
        public int hec_funded_projects_completed { get; set; }
        public int non_hec_funded_projects_completed { get; set; }
        public int joint_projects_submitted { get; set; }
        public int joint_projects_approved { get; set; }
        public int joint_projects_completed { get; set; }
        public int policy_advocacy_case_studies { get; set; }
        public int research_links_established { get; set; }
        public int civic_engagements { get; set; }
        public int consultancy_contracts_executed { get; set; }
        public int liaison_with_asrb { get; set; }
    }
}
