
function enviarOrcamentoWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const tipo = document.getElementById('tipo').value;
    const cores = document.getElementById('cores').value.trim() || 'A combinar';
    const detalhes = document.getElementById('detalhes').value.trim();

    const telefone = '5518988196226';

    const mensagem =
        `Olá, *Por acaso 3D*! Vim pelo site e gostaria de um orçamento:\n\n` +
        `*Nome:* ${nome}\n` +
        `*Tipo de Projeto:* ${tipo}\n` +
        `*Cores/Tamanho:* ${cores}\n` +
        `*Ideia/Detalhes:* ${detalhes}`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}