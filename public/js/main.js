const params = new URLSearchParams(window.location.search);
const background = params.get('background') || 'life';

document.getElementById('background').setAttribute('src', `./public/media/${background}.mp4`);

window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
      const { cpus, gpus } = data;
      document.getElementById('cpu-temp').textContent = Math.round(cpus[0].temperature);
      document.getElementById('gpu-temp').textContent = Math.round(gpus[0].temperature);
    }
  }
};

// Initialize
document.getElementById('cpu-temp').textContent = '--';
document.getElementById('gpu-temp').textContent = '--';