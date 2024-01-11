// Code generated by software.amazon.smithy.rust.codegen.smithy-rs. DO NOT EDIT.
pub(crate) fn de_signin_form_payload(input: &[u8]) -> Result<crate::model::signin_form::Builder, ::aws_smithy_json::deserialize::error::DeserializeError> {
    let mut tokens_owned = ::aws_smithy_json::deserialize::json_token_iter(crate::protocol_serde::or_empty_doc(input)).peekable();
                        let tokens = &mut tokens_owned;
    let result =
    crate::protocol_serde::shape_signin_form::de_signin_form(tokens)?
    .ok_or_else(|| ::aws_smithy_json::deserialize::error::DeserializeError::custom("expected payload member value"));
    if tokens.next().is_some() {
        return Err(::aws_smithy_json::deserialize::error::DeserializeError::custom("found more JSON tokens after completing parsing"));
    }
    result
}

pub(crate) fn de_signin_form<'a, I>(tokens: &mut ::std::iter::Peekable<I>) -> Result<Option<crate::model::signin_form::Builder>, ::aws_smithy_json::deserialize::error::DeserializeError>
                        where I: Iterator<Item = Result<::aws_smithy_json::deserialize::Token<'a>, ::aws_smithy_json::deserialize::error::DeserializeError>> {
    match tokens.next().transpose()? {
        Some(::aws_smithy_json::deserialize::Token::ValueNull { .. }) => Ok(None),
                        Some(::aws_smithy_json::deserialize::Token::StartObject { .. }) => {
            #[allow(unused_mut)]
            let mut builder = crate::model::signin_form::Builder::default();
            loop {
                match tokens.next().transpose()? {
                    Some(::aws_smithy_json::deserialize::Token::EndObject { .. }) => break,
                                            Some(::aws_smithy_json::deserialize::Token::ObjectKey { key, .. }) => {
                        match key.to_unescaped()?.as_ref() {
                            "username" => {
                                if let Some(v) =
                                ::aws_smithy_json::deserialize::token::expect_string_or_null(tokens.next())?.map(|s|
                                    s.to_unescaped().map(|u|
                                        u.into_owned()
                                    )
                                ).transpose()?
                                {
                                                                            builder = builder.set_username(v);
                                                                        }
                            }
                            "password" => {
                                if let Some(v) =
                                ::aws_smithy_json::deserialize::token::expect_string_or_null(tokens.next())?.map(|s|
                                    s.to_unescaped().map(|u|
                                        u.into_owned()
                                    )
                                ).transpose()?
                                {
                                                                            builder = builder.set_password(v);
                                                                        }
                            }
                            _ => ::aws_smithy_json::deserialize::token::skip_value(tokens)?
                        }
                    }
                    other => return Err(::aws_smithy_json::deserialize::error::DeserializeError::custom(format!("expected object key or end object, found: {:?}", other)))
                }
            }
            Ok(Some(builder))
        }
        _ => {
            Err(::aws_smithy_json::deserialize::error::DeserializeError::custom("expected start object or null"))
        }
    }
}

