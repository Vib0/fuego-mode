const params = (new URL(window.location.href)).searchParams

const source = params.get('source') || 'gpu'
const background = params.get('background') || 'life'

window.document.getElementById('source').innerText = source
window.document.getElementById('background').setAttribute('src', `./public/media/${background}.mp4`)

window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
      const { cpus, gpus } = data;
      updateTemperature((source === 'cpu' ? cpus : gpus)[0].temperature)
    }
  }
};

function updateTemperature(temperature) {
    window.document.getElementById('temperature').innerText = temperature
}
