var app = {
	dadosContato:{
		subject: "Contato - Front in BH",
		body:"Digite sua Mensagem Aqui",
		to:["davidson@frontinbh.com"]
	},
	faleConosco:function(){
		console.log("chamouEmail")
		blackberry.invoke.card.invokeEmailComposer(app.dadosContato,app.emailEnviado,app.emailCancelado);
	},

	emailEnviado:function(){
		blackberry.ui.toast.show("Email enviado com sucesso");
	},

	emailCancelado:function(){
		blackberry.ui.toast.show("Email Cancelado");
	},

	agendarPalestra:function(){
		blackberry.invoke.card.invokeCalendarComposer();
	}

}