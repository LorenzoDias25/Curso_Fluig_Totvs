function defineStructure() {}
function onSync(lastSyncDate) {}
function createDataset(fields, constraints, sortFields) {
  var ds = DatasetBuilder.newDataset()

  ds.addColumn("Moeda")

  ds.addRow(new Array("R$"))
  ds.addRow(new Array("US$"))
  ds.addRow(new Array("U$"))

  return ds
}
function onMobileSync(user) {}
