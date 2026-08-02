// Datos simulados (Mock DB)
const medicamentosDB = [
  { id: 1, nombre: 'Paracetamol 500mg', categoria: 'Analgésico', stock: 150, estado: 'Óptimo' },
  { id: 2, nombre: 'Ibuprofeno 400mg', categoria: 'Analgésico', stock: 45, estado: 'Bajo' },
  { id: 3, nombre: 'Amoxicilina 500mg', categoria: 'Antibiótico', stock: 0, estado: 'Agotado' },
  { id: 4, nombre: 'Omeprazol 20mg', categoria: 'Antiácido', stock: 80, estado: 'Óptimo' },
  { id: 5, nombre: 'Loratadina 10mg', categoria: 'Antihistamínico', stock: 12, estado: 'Crítico' },
  { id: 6, nombre: 'Azitromicina 500mg', categoria: 'Antibiótico', stock: 110, estado: 'Óptimo' },
  { id: 7, nombre: 'Diclofenaco 50mg', categoria: 'Analgésico', stock: 35, estado: 'Bajo' }
];

const pacientesDB = [
  { id: 101, nombre: 'Carlos Mendoza', edad: 45, telefono: '555-0192', ultimaCita: '2026-07-10', estado: 'Activo' },
  { id: 102, nombre: 'Ana Ramírez', edad: 28, telefono: '555-8473', ultimaCita: '2026-06-25', estado: 'Activo' },
  { id: 103, nombre: 'Luis Torres', edad: 62, telefono: '555-3921', ultimaCita: '2026-01-14', estado: 'Inactivo' },
];

function updateActiveNav(navId) {
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.remove('bg-clinica-cyan/10', 'text-clinica-navy', 'font-extrabold', 'border-l-4', 'border-clinica-green');
    el.classList.add('text-slate-500', 'font-semibold', 'border-l-4', 'border-transparent');
    const icon = el.querySelector('i');
    if (icon) {
      icon.classList.remove('text-clinica-navy');
    }
  });

  const active = document.getElementById(navId);
  if (active) {
    active.classList.remove('text-slate-500', 'border-transparent');
    active.classList.add('bg-clinica-cyan/10', 'text-clinica-navy', 'font-extrabold', 'border-l-4', 'border-clinica-green');
    const activeIcon = active.querySelector('i');
    if (activeIcon) {
      activeIcon.classList.add('text-clinica-navy');
    }
  }
}

const VistaInicio = {
  render: () => `
    <div class="flex flex-col xl:flex-row gap-8 fade-in">
      
      <div class="flex-1 flex flex-col gap-8">
        
        <div>
          <h3 class="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4 ml-2">En Consultorio / Próximo</h3>
          <div class="bg-white rounded-[2rem] p-8 shadow-card border border-slate-100 border-l-[8px] border-l-clinica-green flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
            <div class="absolute -right-8 -top-8 opacity-5 pointer-events-none">
              <i class="fa-solid fa-heart-pulse text-[15rem] text-clinica-green"></i>
            </div>
            
            <div class="flex items-center gap-6 z-10">
              <div class="w-20 h-20 rounded-2xl bg-clinica-bg border border-slate-200 shadow-sm flex items-center justify-center text-clinica-navy text-3xl font-extrabold">
                CM
              </div>
              <div>
                <span class="px-3 py-1 bg-clinica-green/10 text-clinica-green text-[10px] font-black uppercase tracking-widest rounded-full mb-2 inline-block border border-clinica-green/20">
                  <i class="fa-solid fa-circle-dot text-[8px] animate-pulse mr-1.5"></i> En Espera
                </span>
                <h2 class="text-3xl font-extrabold text-clinica-navy tracking-tight mb-1">Carlos Mendoza</h2>
                <p class="text-slate-500 font-semibold text-sm">Revisión Cardiológica &nbsp;&bull;&nbsp; 45 años</p>
              </div>
            </div>
            
            <div class="flex flex-col gap-3 w-full sm:w-auto z-10">
              <button id="btn-iniciar-consulta" class="bg-clinica-navy hover:bg-[#022f5c] text-white px-8 py-4 rounded-xl font-bold shadow-[0_6px_20px_rgba(1,59,120,0.25)] transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
                <i class="fa-solid fa-stethoscope"></i> Iniciar Consulta
              </button>
              <button id="btn-ver-historial" class="bg-white hover:bg-slate-50 text-clinica-navy border border-slate-200 px-8 py-3 rounded-xl font-bold transition-all text-sm">
                Ver Historial
              </button>
            </div>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-end mb-4 ml-2">
            <h3 class="text-[11px] font-bold uppercase tracking-widest text-slate-400">Flujo de Pacientes</h3>
            <a href="#/citas" class="text-xs font-bold text-clinica-cyan hover:underline">Ver agenda completa</a>
          </div>
          
          <div class="bg-white rounded-[2rem] shadow-card border border-slate-100 p-10">
            <div class="relative border-l-2 border-slate-100 ml-6 space-y-10">
              
              <div class="relative pl-10">
                <div class="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-clinica-green border-[4px] border-white shadow-sm"></div>
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-lg font-extrabold text-clinica-navy mb-0.5">09:00 AM - Carlos Mendoza</h4>
                    <p class="text-sm text-slate-500 font-medium">Revisión Cardiológica</p>
                  </div>
                  <span class="text-xs font-bold text-clinica-green bg-clinica-green/10 px-2.5 py-1 rounded-md">Actual</span>
                </div>
              </div>
              
              <div class="relative pl-10">
                <div class="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-200 border-[4px] border-white shadow-sm"></div>
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-lg font-bold text-slate-700 mb-0.5">10:30 AM - Ana Ramírez</h4>
                    <p class="text-sm text-slate-500 font-medium">Lectura de Análisis Clínicos</p>
                  </div>
                  <span class="text-xs font-bold text-slate-400">Próximo</span>
                </div>
              </div>
              
              <div class="relative pl-10">
                <div class="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-200 border-[4px] border-white shadow-sm"></div>
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-lg font-bold text-slate-700 mb-0.5">11:15 AM - Luis Torres</h4>
                    <p class="text-sm text-slate-500 font-medium">Consulta General</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <div class="w-full xl:w-96 flex flex-col gap-8">
        
        <div>
          <h3 class="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4 ml-2">Avisos del Sistema</h3>
          
          <div class="flex flex-col gap-4">
            <!-- Alerta Farmacia -->
            <div class="bg-rose-50/80 rounded-3xl p-6 border border-rose-100 flex gap-5 items-start transition-transform hover:-translate-y-0.5">
              <div class="w-12 h-12 rounded-2xl bg-white text-rose-500 flex items-center justify-center shrink-0 shadow-sm border border-rose-100/50">
                <i class="fa-solid fa-pills text-lg"></i>
              </div>
              <div>
                <h4 class="text-sm font-extrabold text-rose-700 mb-1.5">Stock Crítico en Farmacia</h4>
                <p class="text-[13px] text-rose-600/80 font-semibold mb-3 leading-snug">Amoxicilina 500mg agotada. 2 medicamentos por debajo del nivel.</p>
                <a href="#/medicamentos" class="text-xs font-bold text-rose-700 hover:underline">Revisar Inventario &rarr;</a>
              </div>
            </div>
            
            <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-card flex gap-5 items-start transition-transform hover:-translate-y-0.5">
              <div class="w-12 h-12 rounded-2xl bg-clinica-cyan/10 text-clinica-cyan flex items-center justify-center shrink-0">
                <i class="fa-solid fa-microscope text-lg"></i>
              </div>
              <div>
                <h4 class="text-sm font-extrabold text-clinica-navy mb-1.5">Resultados de Laboratorio</h4>
                <p class="text-[13px] text-slate-500 font-semibold mb-3 leading-snug">Análisis de sangre de <strong class="text-slate-700">Luis Torres</strong> listos para revisión.</p>
                <button class="text-xs font-bold text-clinica-cyan hover:underline">Ver Documento &rarr;</button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4 ml-2">Accesos Directos</h3>
          <div class="bg-white rounded-3xl shadow-card border border-slate-100 p-2">
            <button class="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-clinica-green/10 group-hover:text-clinica-green transition-colors">
                  <i class="fa-solid fa-file-prescription"></i>
                </div>
                <span class="font-bold text-slate-700 text-sm">Emitir Receta Libre</span>
              </div>
              <i class="fa-solid fa-chevron-right text-slate-300 text-xs"></i>
            </button>
            <button class="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-clinica-cyan/10 group-hover:text-clinica-cyan transition-colors">
                  <i class="fa-solid fa-address-card"></i>
                </div>
                <span class="font-bold text-slate-700 text-sm">Alta de Paciente Express</span>
              </div>
              <i class="fa-solid fa-chevron-right text-slate-300 text-xs"></i>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  `,
  init: () => {
    document.getElementById('page-subtitle').innerText = 'Panel de Control';
    document.getElementById('page-title').innerText = 'Resumen General';
    updateActiveNav('nav-inicio');

    document.getElementById('btn-iniciar-consulta').addEventListener('click', () => {
      Swal.fire({
        title: 'Iniciar Consulta',
        html: `
          <div class="text-left font-sans mt-4 space-y-4">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-1">Motivo de la consulta actual</label>
              <input type="text" class="swal2-input border-slate-200 m-0 w-full" value="Revisión Cardiológica" style="font-family: inherit;">
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-1">Notas preliminares (Enfermería)</label>
              <textarea class="swal2-textarea border-slate-200 m-0 w-full p-3 resize-none" rows="3" style="font-family: inherit;">Presión 120/80. Pulso 75 lpm. Paciente reporta sentirse bien.</textarea>
            </div>
            <div class="bg-clinica-cyan/10 p-3 rounded-lg border border-clinica-cyan/20">
              <p class="text-sm text-clinica-navy font-semibold"><i class="fa-solid fa-circle-info mr-2"></i>Al iniciar, el estado del paciente cambiará a "En Consulta".</p>
            </div>
          </div>
        `,
        showCancelButton: true,
        confirmButtonColor: '#2b8243',
        cancelButtonColor: '#94a3b8',
        confirmButtonText: '<i class="fa-solid fa-play mr-2"></i> Comenzar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Consulta Iniciada',
            text: 'El cronómetro de la consulta ha comenzado.',
            icon: 'success',
            confirmButtonColor: '#013b78'
          });
        }
      });
    });

    document.getElementById('btn-ver-historial').addEventListener('click', () => {
      Swal.fire({
        title: 'Historial Clínico - Carlos Mendoza',
        html: `
          <div class="text-left font-sans mt-4">
            <div class="border-l-4 border-clinica-green pl-4 mb-4">
              <h4 class="font-bold text-clinica-navy">Última visita: 15 de Mayo, 2026</h4>
              <p class="text-sm text-slate-500">Motivo: Chequeo de presión arterial.</p>
              <p class="text-sm text-slate-500">Diagnóstico: Presión ligeramente elevada.</p>
            </div>
            <div class="border-l-4 border-clinica-cyan pl-4 mb-4">
              <h4 class="font-bold text-clinica-navy">10 de Enero, 2026</h4>
              <p class="text-sm text-slate-500">Motivo: Dolor en el pecho.</p>
              <p class="text-sm text-slate-500">Diagnóstico: Estrés, se recetó descanso y electrocardiograma normal.</p>
            </div>
            <div class="border-l-4 border-slate-300 pl-4">
              <h4 class="font-bold text-slate-700">22 de Agosto, 2025</h4>
              <p class="text-sm text-slate-500">Motivo: Examen general.</p>
              <p class="text-sm text-slate-500">Diagnóstico: Paciente sano.</p>
            </div>
          </div>
        `,
        width: 600,
        confirmButtonColor: '#013b78',
        confirmButtonText: 'Cerrar'
      });
    });
  }
};

const VistaPacientes = {
  render: () => `
    <div class="fade-in">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-8">
        
        <div class="flex items-center gap-4 hidden sm:flex">
          <div class="w-14 h-14 bg-clinica-green/10 text-clinica-green rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-clinica-green/20">
            <i class="fa-solid fa-users-medical"></i>
          </div>
          <div>
            <h2 class="text-2xl font-extrabold text-clinica-navy">Base de Pacientes</h2>
            <p class="text-sm text-slate-500 font-medium">Gestión de historiales clínicos</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div class="relative w-full sm:w-[22rem]">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-slate-400"></i>
            <input type="text" placeholder="Buscar por nombre, ID o teléfono..." class="w-full pl-11 pr-4 py-3 bg-white border border-slate-200/70 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-clinica-cyan/50 focus:border-clinica-cyan shadow-sm transition-all">
          </div>
          <button id="btn-nuevo-paciente" class="bg-white hover:bg-slate-50 text-clinica-navy border border-slate-200 font-bold py-3 px-6 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            <i class="fa-solid fa-user-plus text-clinica-green"></i> Nuevo
          </button>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm whitespace-nowrap">
            <thead class="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th class="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">Expediente</th>
                <th class="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">Paciente</th>
                <th class="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">Detalles</th>
                <th class="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">Última Visita</th>
                <th class="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">Estado</th>
                <th class="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 text-right">Opciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100/80">
              ${pacientesDB.map(p => `
                <tr class="hover:bg-slate-50/60 transition-colors">
                  <td class="px-8 py-5 font-bold text-slate-400">#${p.id}</td>
                  <td class="px-8 py-5">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-xl bg-clinica-navy/5 border border-clinica-navy/10 flex items-center justify-center text-clinica-navy font-bold text-sm">
                        ${p.nombre.charAt(0)}
                      </div>
                      <span class="font-bold text-slate-800 text-base">${p.nombre}</span>
                    </div>
                  </td>
                  <td class="px-8 py-5 text-slate-500 font-medium">${p.edad} años • ${p.telefono}</td>
                  <td class="px-8 py-5 text-slate-500 font-medium">${p.ultimaCita}</td>
                  <td class="px-8 py-5">
                    <span class="px-3 py-1.5 rounded-lg text-[11px] font-bold ${p.estado === 'Activo' ? 'bg-clinica-green/10 text-clinica-green border border-clinica-green/20' : 'bg-slate-100 text-slate-500 border border-slate-200'}">
                      ${p.estado}
                    </span>
                  </td>
                  <td class="px-8 py-5 text-right">
                    <button class="btn-ver-expediente text-clinica-cyan hover:text-clinica-navy p-2 transition-colors" data-id="${p.id}" data-nombre="${p.nombre}">
                      <i class="fa-solid fa-folder-open text-lg"></i>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  init: () => {
    document.getElementById('page-subtitle').innerText = 'Gestión de';
    document.getElementById('page-title').innerText = 'Expedientes';
    updateActiveNav('nav-pacientes');

    document.getElementById('btn-nuevo-paciente').addEventListener('click', () => {
      Swal.fire({
        title: 'Nuevo Paciente',
        html: `
          <input id="swal-input1" class="swal2-input border-slate-200" placeholder="Nombre completo" style="font-family: inherit;">
          <input id="swal-input2" class="swal2-input border-slate-200" placeholder="Teléfono" type="tel" style="font-family: inherit;">
        `,
        focusConfirm: false,
        confirmButtonText: 'Registrar',
        confirmButtonColor: '#013b78',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({ title: 'Registrado', text: 'El expediente ha sido creado.', icon: 'success', confirmButtonColor: '#2b8243' });
        }
      });
    });

    document.querySelectorAll('.btn-ver-expediente').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const nombre = e.currentTarget.dataset.nombre;
        Swal.fire({
          title: `Expediente Médico`,
          html: `
            <div class="text-left font-sans mt-2 space-y-4">
              <div class="flex gap-4 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <div class="w-12 h-12 rounded-full bg-clinica-navy text-white flex items-center justify-center text-xl font-bold shrink-0">
                   ${nombre.charAt(0)}
                 </div>
                 <div>
                   <p class="font-bold text-slate-800 text-lg">${nombre}</p>
                   <p class="text-sm text-slate-500">ID: #${id} | Seguro: Activo</p>
                 </div>
              </div>
              <div>
                <h4 class="font-bold text-clinica-navy text-sm uppercase tracking-wider mb-2">Historial Médico Resumido</h4>
                <ul class="text-sm text-slate-600 space-y-2">
                  <li class="flex gap-2"><i class="fa-solid fa-check text-clinica-green mt-0.5"></i> Sin alergias conocidas.</li>
                  <li class="flex gap-2"><i class="fa-solid fa-check text-clinica-green mt-0.5"></i> Esquema de vacunación completo.</li>
                  <li class="flex gap-2"><i class="fa-solid fa-triangle-exclamation text-amber-500 mt-0.5"></i> Observación de presión arterial en la última visita.</li>
                </ul>
              </div>
            </div>
          `,
          width: 500,
          confirmButtonColor: '#013b78',
          confirmButtonText: 'Cerrar'
        });
      });
    });
  }
};

const VistaCitas = {
  render: () => `
    <div class="fade-in">
      <div class="bg-white rounded-3xl shadow-card border border-slate-100 p-12 text-center py-24 flex flex-col items-center">
        <div class="w-24 h-24 bg-clinica-cyan/10 text-clinica-cyan rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-sm">
          <i class="fa-regular fa-calendar-days"></i>
        </div>
        <h2 class="text-3xl font-extrabold text-clinica-navy mb-3 tracking-tight">Agenda Médica</h2>
        <p class="text-slate-500 font-medium max-w-md mb-8">Esta sección mostrará el calendario interactivo semanal. (Módulo visual demostrativo).</p>
      </div>
    </div>
  `,
  init: () => {
    document.getElementById('page-subtitle').innerText = 'Organización';
    document.getElementById('page-title').innerText = 'Agenda Diaria';
    updateActiveNav('nav-citas');
  }
};

const VistaMedicamentos = {
  render: () => `
    <div class="fade-in">
      <div class="bg-white p-5 rounded-2xl shadow-card border border-slate-100 mb-8 flex flex-col sm:flex-row gap-5 items-center">
        <div class="flex-grow w-full">
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-slate-400"></i>
            <input type="text" id="filtro-texto" placeholder="Buscar por clave o nombre comercial..." class="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-clinica-cyan/50 transition-all">
          </div>
        </div>
        <div class="w-full sm:w-72">
          <select id="filtro-categoria" class="bg-slate-50/50 border border-slate-200/70 text-slate-700 text-sm font-semibold rounded-xl focus:ring-clinica-cyan/50 focus:border-clinica-cyan w-full p-3 cursor-pointer">
            <option value="Todos">Todas las categorías</option>
            <option value="Analgésico">Analgésico</option>
            <option value="Antibiótico">Antibiótico</option>
            <option value="Antiácido">Antiácido</option>
            <option value="Antihistamínico">Antihistamínico</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="contenedor-medicamentos">
      </div>
    </div>
  `,
  init: () => {
    document.getElementById('page-subtitle').innerText = 'Inventario';
    document.getElementById('page-title').innerText = 'Farmacia / Stock';
    updateActiveNav('nav-medicamentos');

    const renderStock = (lista) => {
      const container = document.getElementById('contenedor-medicamentos');
      
      if(lista.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-medium">No se encontraron registros.</div>`;
        return;
      }

      container.innerHTML = lista.map(m => {
        let badgeClass = '';
        if (m.estado === 'Óptimo') badgeClass = 'bg-clinica-green/10 text-clinica-green border-clinica-green/20';
        else if (m.estado === 'Bajo') badgeClass = 'bg-amber-50 text-amber-600 border-amber-200/50';
        else badgeClass = 'bg-rose-50 text-rose-600 border-rose-200/50';

        return `
          <div class="bg-white rounded-2xl shadow-card border border-slate-100 p-6 hover:shadow-soft transition-all group">
            <div class="flex justify-between items-start mb-4">
              <span class="px-2.5 py-1 text-[10px] font-bold rounded-lg border uppercase tracking-wider ${badgeClass}">
                ${m.estado}
              </span>
              <button class="text-slate-300 hover:text-clinica-navy transition-colors"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
            
            <div class="mb-5">
              <h4 class="text-lg font-extrabold text-clinica-navy leading-tight mb-1">${m.nombre}</h4>
              <span class="text-xs font-semibold text-slate-400 tracking-wide">${m.categoria}</span>
            </div>
            
            <div class="flex items-end justify-between bg-slate-50/50 rounded-xl p-4 border border-slate-100">
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Stock Disp.
              </div>
              <div class="text-3xl font-black ${m.stock === 0 ? 'text-rose-500' : 'text-slate-800'} leading-none">
                ${m.stock}
              </div>
            </div>
          </div>
        `;
      }).join('');
    };

    renderStock(medicamentosDB);

    const filtrar = () => {
      const texto = document.getElementById('filtro-texto').value.toLowerCase();
      const categoria = document.getElementById('filtro-categoria').value;

      const filtrados = medicamentosDB.filter(m => {
        const coincideTexto = m.nombre.toLowerCase().includes(texto);
        const coincideCategoria = categoria === 'Todos' || m.categoria === categoria;
        return coincideTexto && coincideCategoria;
      });
      renderStock(filtrados);
    };

    document.getElementById('filtro-texto').addEventListener('input', filtrar);
    document.getElementById('filtro-categoria').addEventListener('change', filtrar);
  }
};

const VistaNuevaCita = {
  render: () => `
    <div class="max-w-3xl fade-in pb-10">
      <div class="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden">
        <div class="p-8 border-b border-slate-100">
          <h2 class="text-2xl font-bold text-clinica-navy tracking-tight">Formulario de Ingreso</h2>
          <p class="text-slate-500 text-sm mt-1 font-medium">Complete los datos para agendar una nueva cita en el sistema.</p>
        </div>
        
        <form id="form-cita" class="p-8 space-y-8">
          <div class="space-y-6">
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">Información Principal</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-[13px] font-bold text-slate-700 mb-2">Expediente / Paciente</label>
                <select class="w-full p-3 bg-slate-50/50 border border-slate-200/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-clinica-cyan/50 focus:border-clinica-cyan transition-all cursor-pointer">
                  <option value="">Seleccione un paciente...</option>
                  ${pacientesDB.map(p => `<option value="${p.id}">${p.nombre}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-[13px] font-bold text-slate-700 mb-2">Especialidad Requerida</label>
                <select class="w-full p-3 bg-slate-50/50 border border-slate-200/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-clinica-cyan/50 focus:border-clinica-cyan transition-all cursor-pointer">
                  <option>Medicina General</option>
                  <option>Cardiología</option>
                  <option>Pediatría</option>
                  <option>Exámenes Clínicos</option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-[13px] font-bold text-slate-700 mb-2">Fecha Solicitada</label>
                <input type="date" class="w-full p-3 bg-slate-50/50 border border-slate-200/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-clinica-cyan/50 focus:border-clinica-cyan transition-all cursor-text">
              </div>
              <div>
                <label class="block text-[13px] font-bold text-slate-700 mb-2">Horario</label>
                <input type="time" class="w-full p-3 bg-slate-50/50 border border-slate-200/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-clinica-cyan/50 focus:border-clinica-cyan transition-all cursor-text">
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">Observaciones</h3>
            <div>
              <label class="block text-[13px] font-bold text-slate-700 mb-2">Motivo de consulta (Breve)</label>
              <textarea rows="3" class="w-full p-4 bg-slate-50/50 border border-slate-200/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-clinica-cyan/50 focus:border-clinica-cyan transition-all resize-none" placeholder="Describa síntomas principales..."></textarea>
            </div>
          </div>

          <div class="pt-6 flex justify-end gap-4">
            <button type="button" onclick="window.location.hash='#/'" class="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all">Cancelar</button>
            <button type="submit" class="px-8 py-3 text-sm font-bold bg-clinica-navy hover:bg-[#022f5c] text-white rounded-xl shadow-[0_6px_16px_rgba(1,59,120,0.2)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <i class="fa-solid fa-check"></i> Agendar Turno
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  init: () => {
    document.getElementById('page-subtitle').innerText = 'Recepción';
    document.getElementById('page-title').innerText = 'Registrar Cita';
    updateActiveNav('');

    document.getElementById('form-cita').addEventListener('submit', (e) => {
      e.preventDefault();
      Swal.fire({
        title: '¡Cita Confirmada!',
        text: 'La cita ha sido agendada con éxito.',
        icon: 'success',
        confirmButtonColor: '#013b78'
      }).then(() => {
        window.location.hash = '#/citas';
      });
    });
  }
};

const rutas = {
  '#/': VistaInicio,
  '#/pacientes': VistaPacientes,
  '#/citas': VistaCitas,
  '#/medicamentos': VistaMedicamentos,
  '#/nueva-cita': VistaNuevaCita
};

function enrutador() {
  const urlActual = window.location.hash || '#/';
  const vista = rutas[urlActual] || rutas['#/'];
  
  const contenedor = document.getElementById('app');
  contenedor.innerHTML = vista.render();
  
  vista.init();
}

window.addEventListener('hashchange', enrutador);
window.addEventListener('load', enrutador);