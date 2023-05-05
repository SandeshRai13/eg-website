import React from "react";
import {
  IconByName,
  AdminLayout as Layout,
  ProgressBar,
  facilitatorRegistryService,
  H3,
  H1,
  H2,
  BodyLarge,
  BodySmall,
  Loading,
  t,
} from "@shiksha/common-lib";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  Box,
  Avatar,
  Stack,
} from "native-base";
import { ChipStatus } from "component/Chip";
import NotFound from "../../NotFound";
import StatusButton from "./view/StatusButton";

export default function FacilitatorView({ footerLinks }) {
  const { id } = useParams();
  const [data, setData] = React.useState();
  const navigate = useNavigate();

  React.useEffect(async () => {
    const result = await facilitatorRegistryService.getOne({ id });
    setData(result);
  }, []);

  if (!data) {
    return <Loading />;
  } else if (_.isEmpty(data)) {
    return <NotFound goBack={(e) => navigate(-1)} />;
  }

  return (
    <Layout _sidebar={footerLinks}>
      <HStack>
        <VStack flex={0.82} space={"5"} p="3" mb="5">
          <HStack alignItems={"center"} space="3" pt="3">
            <IconByName
              size="sm"
              name="ArrowLeftSLineIcon"
              onPress={(e) => navigate(-1)}
            />
            <H3> {t("PRERAK_BIO")}</H3>
          </HStack>
          <Stack direction="row" justifyContent="spacearound">
            <HStack width="70%" direction="column" justifyContent="spacearound">
              <HStack justifyContent="flexStart" mb="6">
                <H1>
                  {data?.first_name} {data?.last_name}
                </H1>
                <Box direction="Row" ml="2">
                  <ChipStatus status={data?.status} />
                </Box>
                <HStack bg="badgeColor.400" rounded={"md"} ml="4" py="1" px="1">
                  <IconByName
                    isDisabled
                    _icon={{ size: "20px" }}
                    name="CellphoneLineIcon"
                    color="textGreyColor.300"
                  />
                  <Text fontSize="14" pb="2">
                    {data?.mobile}
                  </Text>
                </HStack>
                <HStack bg="badgeColor.400" rounded={"md"} ml="4" py="1" px="1">
                  <IconByName
                    isDisabled
                    _icon={{ size: "20px" }}
                    name="MapPinLineIcon"
                    color="textGreyColor.300"
                  />
                  <Text fontSize="12px">{data?.address}</Text>
                </HStack>
              </HStack>
              <H2 fontSize="18" pb="2">
                {" "}
                {t("ELIGIBILITY_CRITERIA")}
              </H2>
              <HStack width={"100%"}>
                <IconByName
                  flex={0.3}
                  name="DonutChartLineIcon"
                  isDisabled
                  color="darkBlue.400"
                  _icon={{ size: "100px" }}
                />
                <VStack flex={0.7} space="2">
                  <HStack alignItems={"center"} space={"2"}>
                    <BodySmall> {t("SEND_AN_INVITE")}</BodySmall>
                    <ProgressBar
                      flex="1"
                      isLabelCountHide
                      data={[
                        {
                          value: 135,
                          color: "progressBarColor.200",
                        },
                        { value: 80, color: "textGreyColor.300" },
                      ]}
                    />
                  </HStack>
                  <HStack alignItems={"center"} space={"2"}>
                    <BodySmall>{t("WORK_EXPERIENCE")}</BodySmall>
                    <ProgressBar
                      flex="1"
                      isLabelCountHide
                      data={[
                        { value: 25, color: "progressBarColor.200" },
                        { value: 75, color: "textGreyColor.300" },
                      ]}
                    />
                  </HStack>
                  <HStack alignItems={"center"} space={"2"}>
                    <BodySmall>{t("VOLUNTEER_EXPERIENCE")}</BodySmall>
                    <ProgressBar
                      flex="1"
                      isLabelCountHide
                      data={[
                        { value: 25, color: "progressBarColor.200" },
                        { value: 75, color: "textGreyColor.300" },
                      ]}
                    />
                  </HStack>
                  <HStack alignItems={"center"} space={"2"}>
                    <BodySmall>{t("AVAILABILITY")}</BodySmall>
                    <ProgressBar
                      flex="1"
                      isLabelCountHide
                      data={[
                        { value: 25, color: "progressBarColor.200" },
                        { value: 75, color: "textGreyColor.300" },
                      ]}
                    />
                  </HStack>
                </VStack>
              </HStack>
            </HStack>
            <HStack width="30%" pl="5">
              {data?.profile_url ? (
                <Avatar
                  source={{
                    uri: data?.profile_url,
                  }}
                  // alt="Alternate Text"
                  width={"190px"}
                  height={"190px"}
                />
              ) : (
                <IconByName
                  isDisabled
                  name="AccountCircleLineIcon"
                  color="textGreyColor.300"
                  _icon={{ size: "190px" }}
                />
              )}
            </HStack>
          </Stack>
          <HStack alignItems={Center} space="9" pt="5">
            <VStack flex={0.3} space="5">
              <Button
                variant="outlinePrimary"
                leftIcon={<IconByName isDisabled name="MessageLineIcon" />}
              >
                {t("SEND_MESSAGE")}
              </Button>
            </VStack>
          </HStack>

          <VStack space={"5"} p="5" mt="6">
            <H3>{t("APPLICATION_FORM")}</H3>
            <HStack justifyContent="space-evenly">
              <VStack space={"5"} w="50%" bg="light.100" p="6" rounded="xl">
                <Heading
                  fontSize="16px"
                  borderColor="light.400"
                  pb="1"
                  borderBottomWidth="1"
                >
                  {t("BASIC_DETAILS")}
                </Heading>
                <VStack>
                  <Text color="warmGray.500">{t("FIRST_NAME")} </Text>
                  <Text>{data?.first_name}</Text>
                </VStack>

                <VStack>
                  <Text color="warmGray.500">{t("LAST_NAME")} </Text>
                  <Text>{data?.last_name}</Text>
                </VStack>

                <VStack>
                  <Text color="warmGray.500">{t("MOBILE_NO")} </Text>
                  <Text>{data?.mobile}</Text>
                </VStack>

                <VStack>
                  <Text color="warmGray.500">{t("DATE_OF_BIRTH")} </Text>
                  <Text>{data?.dob}</Text>
                </VStack>

                <VStack>
                  <Text color="warmGray.500">{t("GENDER")} </Text>
                  <Text>{data?.gender}</Text>
                </VStack>

                <VStack>
                  <Text color="warmGray.500">{t("ADDRESS")} </Text>
                  <Text>{data?.address}</Text>
                </VStack>

                <VStack>
                  <Text color="warmGray.500">{t("AADHAAR_NO")} </Text>
                  <Text>{data?.aadhar_token}</Text>
                </VStack>
              </VStack>
              <VStack
                display="Flex"
                flexDirection="row"
                space="20px"
                w="50%"
                bg="light.100"
                p="6"
                ml="2"
                rounded="xl"
              >
                <VStack
                  display="Flex"
                  flexDirection="column"
                  space="20px"
                  w="100%"
                >
                  <Heading
                    fontSize="16px"
                    borderColor="light.400"
                    pb="1"
                    borderBottomWidth="1"
                  >
                    {t("EDUCATION")}{" "}
                  </Heading>
                  <VStack>
                    <Text color="warmGray.500">{t("QUALIFICATION")} </Text>
                    <Text>
                      {data?.qualifications?.map((qua, key) => {
                        return (
                          <Text key={key}>
                            {qua?.qualification_master?.name}
                          </Text>
                        );
                      })}
                    </Text>
                  </VStack>

                  <VStack>
                    <Text color="warmGray.500">{t("WORK_EXPERIENCE")} </Text>
                    <VStack space={5}>
                      {data?.experience?.map((obj, key) => {
                        return (
                          <VStack key={key}>
                            {obj?.role_title ? (
                              <Text>
                                {t("ROLE")} : {obj?.role_title}
                              </Text>
                            ) : (
                              <React.Fragment />
                            )}
                            {obj?.experience_in_years ? (
                              <Text>
                                {t("YEARS_OF_EX")} : {obj?.experience_in_years}
                              </Text>
                            ) : (
                              <React.Fragment />
                            )}
                            {obj?.description ? (
                              <Text>
                                {t("DESCRIPTION")} : {obj?.description}
                              </Text>
                            ) : (
                              <React.Fragment />
                            )}
                          </VStack>
                        );
                      })}
                    </VStack>
                  </VStack>
                  <VStack display="Flex" flexDirection="column" space="20px">
                    <Heading
                      fontSize="16px"
                      borderColor="light.400"
                      pb="1"
                      borderBottomWidth="1"
                    >
                      {t("OTHER_DETAILS")}
                    </Heading>
                    <VStack>
                      <Text color="warmGray.500">{t("AVAILABILITY")} </Text>
                      <Text>{data?.program_faciltators?.availability}</Text>
                    </VStack>
                    <VStack>
                      <Text color="warmGray.500">{t("DEVICE_OWNERSHIP")} </Text>
                      <Text>{data?.device_ownership}</Text>
                    </VStack>
                    <VStack>
                      <Text color="warmGray.500">{t("TYPE_OF_DEVICE")} </Text>
                      <Text>{data?.device_type}</Text>
                    </VStack>
                  </VStack>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
          <StatusButton {...{ data, setData }} />
        </VStack>

        <VStack
          flex={0.18}
          bg="white.300"
          px="3"
          py="5"
          space={"5"}
          borderColor="light.400"
          pb="1"
          borderLeftWidth="1"
        >
          <HStack justifyContent="space-between" alignItems={"center"}>
            <IconByName isDisabled name="EditBoxLineIcon" />
            <H3>{t("COMMENT_SECTION")}</H3>
            <IconByName isDisabled name="ArrowRightSLineIcon" />
          </HStack>
          <VStack space={"3"}>
            {[
              { name: "you", message: "Profile needs to be completed" },
              {
                name: "Manoj",
                message: "Profile needs to be completed before onboarding",
              },
            ].map((item, key) => (
              <VStack key={key} space={"1"}>
                <HStack space={"3"}>
                  <IconByName
                    isDisabled
                    color="gray.300"
                    _icon={{ size: "24px" }}
                    name="AccountCircleLineIcon"
                  />
                  <BodyLarge>{item?.name}</BodyLarge>
                </HStack>
                <Box bg="gray.200" p="4">
                  <BodySmall>{item?.message}</BodySmall>
                </Box>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </HStack>
    </Layout>
  );
}
