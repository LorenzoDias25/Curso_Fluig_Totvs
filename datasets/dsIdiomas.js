function defineStructure() {}
function onSync(lastSyncDate) {}
function createDataset(fields, constraints, sortFields) {
  var ds = DatasetBuilder.newDataset()

  ds.addColumn("Idioma")

  ds.addRow(new Array("Português"))
  ds.addRow(new Array("Inglês"))
  ds.addRow(new Array("Espanhol"))

  return ds
}
function onMobileSync(user) {}
