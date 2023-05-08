# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Ticket 1: Allow Facilities to save custom IDs for Agents

Description:
Currently, the reports generated for Facilities display the internal database IDs of Agents. To enhance the functionality, we need to allow Facilities to save their own custom IDs for each Agent they work with. This custom ID will be used when generating reports for the Facilities.

Acceptance Criteria:
Add a new field 'custom_id' to the Agents table in the database.
Update the user interface to include an input field for Facilities to enter and save custom IDs for each Agent.
Ensure that custom IDs are unique within each Facility.
When generating reports, use the custom ID instead of the internal database ID for each Agent.
Validate the input to ensure that custom IDs adhere to any required format or length constraints.
Update the existing documentation to reflect the changes.

Implementation Details:
Modify the Agents table schema to include the 'custom_id' field.
Implement an API endpoint to handle the saving of custom IDs.
Update the user interface to include the input field for custom IDs.
Implement validation logic to ensure uniqueness and any required format constraints.
Modify the report generation function to use the custom ID when generating reports.
Time/Effort Estimate: 8 hours

Ticket 2: Update existing reports to display custom IDs

Description:
Currently, the reports generated for Facilities display the internal database IDs of Agents. To fulfill the new requirement, the existing reports need to be updated to display the custom IDs saved by Facilities for each Agent.

Acceptance Criteria:
Retrieve the custom IDs for Agents from the database.
Modify the report generation function to include the custom IDs in the generated reports.
Ensure that the layout and formatting of the reports are not affected by the addition of custom IDs.
Test the updated report generation function to verify that custom IDs are displayed correctly.

Implementation Details:
Retrieve the custom IDs for Agents by querying the database using the Facility's ID.
Update the report generation function to include the custom IDs in the appropriate sections of the report template.
Validate the report layout and formatting to ensure that the custom IDs are displayed correctly.
Conduct thorough testing to verify the accuracy of the updated report generation function.
Time/Effort Estimate: 4 hours

Ticket 3: Data migration for existing Facilities

Description:
To support the new functionality, existing Facilities need to have their Agent data migrated to include the custom IDs that they have saved. This ticket involves updating the existing Agent records for each Facility.

Acceptance Criteria:
Retrieve the existing Agents for each Facility.
Update the Agent records to include the custom IDs saved by Facilities.
Ensure that custom IDs are unique within each Facility.
Validate the input to ensure that custom IDs adhere to any required format or length constraints.
Test the migration process to verify that the Agent records are updated correctly.

Implementation Details:
Retrieve the existing Agents for each Facility by querying the database.
Update the Agent records by assigning the custom IDs saved by Facilities.
Implement validation logic to ensure uniqueness and any required format constraints during the update process.
Conduct thorough testing to verify the accuracy of the migration process.
Time/Effort Estimate: 6 hours

Ticket 4: Documentation Update

Description:
To inform Facilities about the new functionality, the documentation needs to be updated to include instructions on how to save custom IDs for Agents and how the custom IDs will be used in the generated reports.

Acceptance Criteria:
Update the user documentation with clear instructions on how Facilities can save custom IDs for Agents.
Provide information on the format and length constraints for custom IDs, if applicable.
Explain how the custom IDs will be used in the generated reports.
Ensure that the updated documentation is easily accessible and searchable.

Implementation Details:
Review the existing documentation and identify the sections that need to be updated.
Add a new section or update the existing sections in the documentation to include detailed instructions on how Facilities can save custom IDs for Agents.
Provide examples and clarify any format or length constraints for the custom IDs, if applicable.
Explain how the custom IDs will be used in the generated reports, including their placement and significance within the report.
Ensure that the updated documentation is easily accessible by integrating it into the existing documentation system or publishing it to a relevant platform.
Perform a final review of the documentation to ensure accuracy, clarity, and searchability.
Time/Effort Estimate: 2 hours