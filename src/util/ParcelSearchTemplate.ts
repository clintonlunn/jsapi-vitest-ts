export const parcelsSearchTemplate = {
  title: 'Owner: {OWN_NAME}',
  content:
    '<p><b>Parcel ID:</b> {PARCEL_ID}</p>' +
    '<p><b>State Parcel ID:</b> {STATE_PAR_}</p>' +
    '<p><b>PLI Code:</b> {PLI_CODE}</p>' +
    '<p><b>Size:</b> {custom_size} Acres<p>' +
    '<p><b>Value:</b> ${AV_NSD}</p>' +
    '<p><b>TRS:</b> {TWN} {RNG} {SEC}</p>' +
    '<p><b>Legal Description:</b> {S_LEGAL}</p>',
  actions: [
    {
      title: 'Visit the FL Public Lands Inventory Website',
      id: 'pliWebsite',
      className: 'esri-icon-launch-link-external',
    },
  ],
};
