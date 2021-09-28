{/* <Divider className={classes.divider} />
      </div >
  <form>
    <Button
      variant="contained"
      size="large"
      name="gerarContrato"
      color="primary"
      id="gerarContrato"
      startIcon={<DescriptionIcon />}
      onClick={handleOpen}
    >
      Gerar Contrato
        </Button>
    {open ? (
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-describedby="scroll-dialog-description"
        maxWidth={handleWindowMedia}
        disableBackdropClick
      >
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description">
            <div className={classes.modal}>
              <div>
                <h1><u>{dadosContrato.nomeContrato}</u></h1>
                <h2>"{empresaContratante.nomeEmpContratante}"</h2>
                <p>&emsp;O abaixo assinado:</p><br />
                {
                  sociosContratantes.map((socioContratante, index) =>
                    <p><b>{numeroRomano(index + 1)} - {socioContratante.nomeSocioContratante}</b>, {socioContratante.nacionalidadeSocContratante}, {socioContratante.estadoCivilSocContratante},      {socioContratante.profissaoSocContratante}, {socioContratante.maioridadeSocContratante}, nascido aos      {socioContratante.dataNascimentoSocContratante} na cidade de {socioContratante.cidadeNatSocContratante}/{socioContratante.ufNatSocContratante}, filho de {socioContratante.paiSocContratante} e {socioContratante.maeSocContratante}, portador      da Carteira de Identidade RG sob o n.º {socioContratante.rgSocContratante}, expedida pelo(a)      {socioContratante.emissorRgSocContratante} e do CPF/MF sob o n.º {socioContratante.cpfSocContratante}, residente e domiciliado      nesta cidade e comarca de {socioContratante.cidadeSocContratante} - {socioContratante.ufSocContratante}, CEP:      {socioContratante.cepSocContratante}, à {socioContratante.ruaSocContratante}, nº {socioContratante.numEndSocContratante} -      {socioContratante.bairroSocContratante}, Contato: {socioContratante.telefoneSocContratante},{socioContratante.telefone2SocContratante?.length !== 0 ? ` ${socioContratante.telefone2SocContratante}, ` : ''} e-mail:      <u>{socioContratante.emailSocContratante}</u>, resolve constituir uma Sociedade Simples Limitada Unipessoal, nos      termos da Legislação aplicável, constante do Artigo 1052, Parágrafo Único, do Código Civil      Brasileiro (Lei 10.406/2002) e, ainda em conformidade com Instrução Normativa DREI, nº 63 de 11      Junho de 2019, mediante as cláusulas e condições seguintes:</p>
                  )
                }
                <p><b>CLÁUSULA PRIMEIRA:</b><br />
                        &emsp;&emsp;A Sociedade Simples Limitada Unipessoal irá girar sob a denominação social de: "<b>{empresaContratante.nomeEmpContratante}</b>"{empresaContratante.nomeFantasiaEmpContratante.length !== 0 ? <span>, adotando o nome de fantasia o de: "<b>{empresaContratante.nomeFantasiaEmpContratante}</b>"</span> : ''}.</p>
                <p><b>CLÁUSULA SEGUNDA:</b><br />
                        &emsp;A sede e foro da Sociedade Simples Limitada Unipessoal é nesta cidade e comarca de {empresaContratante.cidadeEmpContratante}/{empresaContratante.ufEmpContratante}, CEP: {empresaContratante.cepEmpContratante}, à <b><u>{empresaContratante.ruaEmpContratante}, Nº{empresaContratante.numEndEmpContratante} - {empresaContratante.bairroEmpContratante}</u></b>, podendo vir abrir filiais qualquer tempo e época, mediante alteração contratual.
                    </p>
                <p><b>CLÁUSULA TERCEIRA:</b><br />
                        &emsp;A presente Sociedade Simples Limitada, que ora se se constitui, adota como natureza jurídica a de Sociedade Simples, constituída sob a forma de Sociedade Simples Limitada Unipessoal, explorando o ramo de atividade o de: <b>{empresaContratante.atividadeEmpContratante}</b></p>
                <p><b>CLÁUSULA QUARTA:</b><br />
                        &emsp;A presente Sociedade Simples Limitada Unipessoal que ora se constitui, inicia suas atividades em {empresaContratante.dataInicioEmpContratante} e seu prazo de duração é por tempo indeterminado.</p>
                <p><b>CLÁUSULA QUINTA:</b><br />
                        &emsp;A presente Sociedade Simples Limitada Unipessoal, que ora se constitui cuja denominação social é: <b>{empresaContratante.nomeEmpContratante}</b>, possui o Capital Social de R$ {empresaContratante.capitalSocialEmpContratante} ({empresaContratante.capitalSocialEmpContratante.extenso(true)}), divididos em {empresaContratante.qtdQuotasEmpContratante} quotas, no valor nominal de R$ {empresaContratante.valorQuotaEmpContratante} ({empresaContratante.valorQuotaEmpContratante.extenso(true)}) cada uma quota, já totalmente integralizadas, em espécie, moeda corrente nacional do país, que compõe o acervo desta, ficando assim distribuído:
                    </p>
                <table>
                  <thead class="negrito">
                    <tr>
                      <td>SOCIO</td>
                      <td>%</td>
                      <td>QUOTAS</td>
                      <td>R$</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{sociosContratantes[0].nomeSocioContratante}</td>
                      <td>100%</td>
                      <td>{empresaContratante.qtdQuotasEmpContratante}</td>
                      <td>{parseFloat(empresaContratante.capitalSocialEmpContratante.replaceAll(".", "").replaceAll(",", "."), 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                  </tbody>
                  <tfoot class="negrito">
                    <tr>
                      <td>TOTAL:</td>
                      <td>100%</td>
                      <td>{empresaContratante.qtdQuotasEmpContratante}</td>
                      <td>{parseFloat(empresaContratante.capitalSocialEmpContratante.replaceAll(".", "").replaceAll(",", "."), 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                  </tfoot>

                </table>
                <p><b>CLÁUSULA SEXTA:</b><br />
                        &emsp;A responsabilidade {
                    sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                      <span>do sócio, <b>{sociosContratantes[0].nomeSocioContratante}</b> acima qualificado, é limitada ao valor e percentual de suas quotas de capital, as quais já estão totalmente integralizadas e, este responde solidariamente pela efetiva integralização deste capital social conforme dispõe o Artigo 1.052 do Código Civil Brasileiro, Lei 10.406/2002.</span>
                    ) : (
                        <span>da sócia, <b>{sociosContratantes[0].nomeSocioContratante}</b> acima qualificada, é limitada ao valor e percentual de suas quotas de capital, as quais já estão totalmente integralizadas e, este responde solidariamente pela efetiva integralização deste capital social conforme dispõe o Artigo 1.052 do Código Civil Brasileiro, Lei 10.406/2002.</span>
                      )
                  }</p>
                <p><b>CLÁUSULA SÉTIMA:</b><br />
                        &emsp;Fica {
                    sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                      <span>vedado ao sócio, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificado,</span>
                    ) : (
                        <span>vedada à sócia, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificada,</span>
                      )
                  } o direito de usar
                        esta Sociedade Simples Limitada Unipessoal, que ora se constitui, em atividades alheias ao seu objeto social, tais como: avais, endossos, fianças, hipotecas, garantias a favor de terceiros.</p>
                <p><b>CLÁUSULA OITAVA:</b><br />
                        &emsp;A administração, assinatura e o uso do nome da Sociedade Simples Limitada Unipessoal, que ora se constitui, fica a cargo, única e exclusivamente,{
                    sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                      <span> do sócio, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificado, o qual assina</span>
                    ) : (
                        <span> da sócia, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificada, a qual assina</span>
                      )
                  } individualmente e isoladamente pela mesma, representando-a ativamente e passivamente, judicialmente e extrajudicialmente, perante repartições Públicas, Federais, Estaduais, Municipais; Autarquias,
                        inclusive Bancos e demais órgãos.</p>
                <p><b><u>PARÁGRAFO ÚNICO:</u></b> Fica {
                  sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                    <span>facultado ao sócio, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificado,</span>
                  ) : (
                      <span>facultada à sócia, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificada,</span>
                    )
                } nomear procuradores, por prazos determinados e/ou indeterminados, devendo o instrumento de procuração especificar os atos e serem praticados pelos outorgados procuradores assim nomeados.</p>
                <p><b>CLÁUSULA NONA:</b><br />
                        &emsp;A retirada, do pró-labore, será mensal, feita {
                    sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                      <span>única e exclusivamente para o sócio, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificado, </span>
                    ) : (
                        <span>única e exclusivamente para a sócia, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificada, </span>
                      )
                  }{
                    <span>e nunca inferior a {empresaContratante.prolaboreEmpContratante} ({empresaContratante.prolaboreEmpContratante.extenso(false)}) {parseFloat(empresaContratante.prolaboreEmpContratante) === 1 ? 'Salário Mínimo Regional' : 'Salários Mínimos Regional'}</span>
                  }, vigente, retirada esta que será mensalmente levada a conta de despesas gerais desta Sociedade Simples Limitada Unipessoal, que ora se constitui respeitadas as disposições legais que regem o assunto.
                    </p>
                <p><b>CLÁUSULA DECIMA:</b><br />
                        &emsp;A apuração dos resultados desta Sociedade Simples Limitada Unipessoal, terá como período o ano civil e será levantado em 31 de Dezembro de cada exercício e os eventuais lucros ou perdas evidenciados deste resultado, em 31 de Dezembro de cada exercício, poderão ser distribuídos ou retidos nesta Sociedade Simples Limitada Unipessoal, que ora se constitui.</p>
                <p><b>CLÁUSULA DECIMA PRIMEIRA:</b><br />
                        &emsp;{
                    sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                      <span>O sócio, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificado, declara para todos os fins de direitos, que não está condenado por nenhum crime e/ou vedação, as quais o</span>
                    ) : (
                        <span>A sócia, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificada, declara para todos os fins de direitos, que não está condenada por nenhum crime e/ou vedação, as quais a</span>
                      )
                  } impeçam do exercício da administração desta Sociedade Simples Limitada Unipessoal, conforme Artigo 1.011, § 1º do Código Civil Brasileiro/2002.</p>
                <p><b>CLÁUSULA DECIMA SEGUNDA:</b><br />
                        &emsp;{
                    sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                      <span>O sócio, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificado,</span>
                    ) : (
                        <span>A sócia, <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificada,</span>
                      )

                  } declara que o movimento da receita bruta anual da empresa não excederá o limite fixado no inciso I do art. 3º da Lei Complementar nº 123 de 14 de dezembro de 2006, e que não se enquadram em qualquer da hipótese de exclusão relacionado no § 4º do art.3º da mencionada Lei.</p>
                <p><b>CLÁUSULA DECIMA TERCEIRA:</b><br />
                        &emsp;Para dirimir quaisquer dúvidas oriundas deste <u>Instrumento Particular de Constituição de Uma Sociedade Simples Limitada</u>, fica desde já, eleito o foro da cidade e comarca de {dadosComarca.cidadeComarca} – {dadosComarca.ufComarca}, eliminando quaisquer outros, por mais privilegiados que estes sejam.</p>
                {
                  clausulasAdicionais.map((clausula, index) =>
                    <p key={index}><b>CLÁUSULA {((index + 14).toOrdinal({ maiuscula: true, genero: 'a' }).toUpperCase())}:</b><br />&emsp;{clausula.clausulaAdicional}</p>
                  )
                }
                <p>&emsp;E, {
                  sociosContratantes[0].sexoSocContratante === 'Masculino' ? (
                    <span>o Sr. <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificado, por estar convicto</span>
                  ) : (
                      <span>a Sra. <b>{sociosContratantes[0].nomeSocioContratante}</b>, acima qualificada, por estar convicta</span>
                    )
                } com esta formalização da presente <b>SOCIEDADE SIMPLES LIMITADA UNIPESSOAL</b>, obriga-se fielmente a cumprir as disposições do presente Instrumento Particular de Constituição de Uma Sociedade Simples Limitada e, para validade assina em 03 (três) folhas somente no anverso, destinando-se ao competente arquivamento no Cartório de Registro de Títulos e Documentos, Registro Civil das Pessoas Naturais e Jurídicas.</p>
                <p class="center">{dadosContrato.cidadeContrato} – {dadosContrato.ufContrato}, {handleDataPorExtenso(dadosContrato.dataContrato, true)}.</p>
                {
                  sociosContratantes.map((socioContratante) => (
                    <span><p class="center assinaturas">
                      <br /><br />_________________________________________________<br />
                      <b>{socioContratante.nomeSocioContratante}<br />
                        {socioContratante.sexoSocContratante === 'Masculino' ? 'SOCIO' : 'SOCIA'} {socioContratante.sexoSocContratante === 'Masculino' ? 'ADMINISTRADOR' : 'ADMINISTRADORA'}</b>
                    </p></span>
                  ))
                }
                <p class="center assinaturas">
                  <br /><br />_________________________________________________<br />
                  <b>{testemunha1.nomeTestemunha1}<br />
                            RG {testemunha1.rgTestemunha1} {testemunha1.emissorRgTestemunha1} e CPF/MF {testemunha1.cpfTestemunha1}</b><br />
                        TESTEMUNHA
                    </p>
                <p class="center assinaturas">
                  <br /><br />_________________________________________________<br />
                  <b>{testemunha2.nomeTestemunha2}<br />
                            RG {testemunha2.rgTestemunha2} {testemunha2.emissorRgTestemunha2} e CPF/MF {testemunha2.cpfTestemunha2}</b><br />
                        TESTEMUNHA
                    </p>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
            Voltar
                      </Button>
          <Button onClick={contratoImp} variant="contained" color="primary" startIcon={<PrintIcon />}>
            Imprimir
                       </Button>
        </DialogActions>
      </Dialog>
    ) : null
    }
  </form> */}